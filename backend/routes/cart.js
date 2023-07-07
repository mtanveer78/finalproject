const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const Cart = require('../models/Cart');
const User = require('../models/User');
const Product = require('../models/Product');
const { body, validationResult } = require('express-validator');
var ObjectId = require('mongodb').ObjectId;

// ROUTE 1: Add a new Cart using: POST "/api/cart/addcart". Login required
router.post('/addcart', fetchUser, [
  body('prod_id', 'Enter a valid Product id'),
  body('prod_qty', 'Enter Product quantity').isLength({ min: 1 }),], async (req, res) => {
    try {
      const { prod_id, prod_qty } = req.body;

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // Check the Product and quatity
      let product = await Product.findById({ _id: prod_id })
      if (!product) {
        return res.json({ "Failed": "Product Not Found" })
      }
      let cart = await Cart.find({ prod_id: prod_id }).find({ user: req.user.id })
      if (cart.length > 0) { return res.json({ "Failed": "This product already added in the cart" }); }
      //If quantity is available in store
      if (product.quantity - prod_qty >= 0) {
        const newProduct = {};
        if (prod_qty) { newProduct.quantity = product.quantity - prod_qty };
        product = await Product.findByIdAndUpdate({ _id: prod_id }, { $set: newProduct }, { new: true })

        const cart = new Cart({
          user: req.user.id, prod_id, prod_qty
        })
        // Save Cart
        const savedCart = await cart.save()
        if (!savedCart) {
          return res.json({ "failed": "Cart has not been Added" });
        }

        res.json({ "Success": "Product has been added into cart" })
      }
      else {
        return res.json({ "failed": "Cart has not been Added" });
      }

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })

// // ROUTE 2: Get the Cart using: GET "/api/cart/fetchcart". Login required
// router.get('/fetchcart', fetchUser, async (req, res) => {
//   try {
//     // const cart = await Cart.find({user: req.user.id});
//     // const pipeline = [
//     //   { $match : { user : req.user.id }},
//     //   {
//     //     $lookup: {
//     //       from: 'Product',
//     //       localField: 'prod_id',
//     //       foreignField: '_id',
//     //       as: 'product'
//     //     }
//     //   }
//     // ];
    
//     // // Use the aggregate function to perform the left JOIN
//     // Cart.aggregate(pipeline).exec(function (error, cart) {
//     //   if (error) {
//     //     console.error(error);
//     //   } else {
//     //     res.json(cart);
//     //   }
//     // });

//     Cart.aggregate([
//       {
//         $match: { user: ObjectId(req.user.id) }
//       },
//       {
//         $lookup: {
//           from: 'Product',
//           localField: 'prod_id',
//           foreignField: '_id',
//           as: 'product_info'
//         }
//       }
//     ]).exec(function (error, cart) {
//       if (error) {
//         console.error(error);
//       } else {
//         res.json(cart);
//       }
//     });
//   // resolve(cartItems[0].cartItems)
//     // res.json(cart)

//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// })

// ROUTE 3: Update an existing Cart using: PUT "/api/cart/updatecart". Login required

router.put('/updatecart/:prod_id', fetchUser, async (req, res) => {
  const { prod_qty } = req.body;
  try {

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check the Product and quatity
    let product = await Product.findById({ _id: req.params.prod_id })
    if (!product) {
      return res.status(404).send("Product Not Found")
    }
    let cart = await Cart.find({ prod_id: req.params.prod_id }).find({ user: req.user.id })
    if (cart.length === 0) { return res.json("Product Not Found") }
    const cart_prod_qty = cart.map((item) => { return item.prod_qty; })
    //Update the product quantity in store
    if (product.quantity - (prod_qty - cart_prod_qty) >= 0) {
      // Create a newart object
      const newCart = {};
      if (prod_qty) { newCart.prod_qty = prod_qty };

      const id = cart.map((item) => { return item._id; })
      cart = await Cart.findByIdAndUpdate({ _id: id }, { $set: newCart }, { new: true })
      if (!cart) { return res.json({ "Failed": "Cart can't be updated" }); }
      const newProduct = {};
      if (prod_qty) { newProduct.quantity = product.quantity - (prod_qty - cart_prod_qty) };
      product = await Product.findByIdAndUpdate(req.params.prod_id, { $set: newProduct }, { new: true })
      res.json({ cart });
    }
    else {
      return res.json({ "Failed": "Product quantity not available" })
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// ROUTE 4: Delete an existing Cart using: DELETE "/api/cart/deletecart". Login required
router.delete('/deletecart/:prod_id', fetchUser, async (req, res) => {
  try {

    // Find the note to be delete and delete it
    let product = await Product.findById({ _id: req.params.prod_id });
    if (product.length === 0) { return res.json("Product not found"); }

    let cart = await Cart.find({ prod_id: req.params.prod_id }).find({ user: req.user.id })
    const id = cart.map((item) => { return item._id; })
    cart = await Cart.findByIdAndDelete({ _id: id })
    if (cart.length === 0) {
      return res.json({ "failed": "Product can not be deleted from Cart" });
    }
    const newProduct = {};
    if (cart.prod_qty > 0) { newProduct.quantity = product.quantity + cart.prod_qty };
    product = await Product.findByIdAndUpdate({ _id: req.params.prod_id }, { $set: newProduct }, { new: true })
    res.json({ "Success": "Note has been deleted", product: product });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})


// ROUTE 2: Get the Cart using: GET "/api/cart/fetchcart". Login required
router.get('/fetchcart', fetchUser, async (req, res) => {
  try {
    Cart.aggregate([
      {
        $match: { user: ObjectId(req.user.id) }
      },
      {
        $lookup: {
          from: "products",
          localField: 'prod_id',
          foreignField: '_id',
          as: 'product_info'
        }
      }
    ]).exec(function (error, cart) {
      if (error) {
        console.error(error);
      } else {
        res.json(cart);
      }
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

module.exports = router