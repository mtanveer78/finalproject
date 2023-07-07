const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const Cart = require('../models/Cart');
const Orders = require('../models/Orders');
const Orderitems = require('../models/Orderitems');
const User = require('../models/User');
const Product = require('../models/Product');
const { body, validationResult } = require('express-validator');
var ObjectId = require('mongodb').ObjectId;

// ROUTE 1: Place order using: POST "/api/order/placeorder". Login required
router.post('/placeorder', fetchUser, [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('contact', 'Enter a valid contact').isMobilePhone(),
  body('address', 'Enter a valid address').isLength({ min: 3 }),
  body('country', 'Enter a valide Country').isLength({ min: 2 }),
  body('city', 'Enter a valid city').isLength({ min: 2 }),
  body('state', 'Enter a valid state').isLength({ min: 2 }),
  body('zip', 'Enter a valide Zip').isLength({ min: 5 }),
  body('total_price', 'Enter a total price').isLength({ min: 1 }),
  body('message', 'Enter a valid message').isLength(),
], async (req, res) => {
  try {
    const { name, email, contact, address, country, city, state, zip, total_price, message } = req.body;

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create a new User object
    const newUser = {};
    if (address) { newUser.address = address };
    if (country) { newUser.country = country };
    if (city) { newUser.city = city };
    if (state) { newUser.state = state };
    if (zip) { newUser.zip = zip };
    const user = await User.findOneAndUpdate({ email: email }, { $set: newUser }, { new: true })

    let cart = await Cart.find({ user: req.user.id })
    // Check the Product and quatity
    let delcart = []


    if (cart.length === 0) { return res.json({ "Failed": "Your Cart is empty" }) }
    for (var cartitem of cart) {
      let product = await Product.findById({ _id: cartitem.prod_id })
      if (product.quantity < cartitem.prod_qty) {
        delcart = await Cart.findByIdAndDelete({ _id: cartitem.id })
      }
    }
    if (delcart.length > 0) { return res.json({ "Failed": "Your Order cannot be proceded" }) }
    const order = new Orders({
      user: req.user.id, name, email, contact, address, country, city, state, zip, total_price, message
    })
    const savedOrder = await order.save()
    if (!savedOrder) { return res.json({ "Failed": "Your Order cannot be placed" }) }
    for (var cartitem of cart) {
      let product = await Product.findById({ _id: cartitem.prod_id })
      const orderitems = new Orderitems({
        order_id: savedOrder.id, prod_id: product.id, prod_name: product.name, prod_image: product.images[0], prod_qty: cartitem.prod_qty, price: product.selling_price
      })
      const savedOrderitem = await orderitems.save()
      delcart = await Cart.findByIdAndDelete({ _id: cartitem.id })
      if (!savedOrderitem) { return res.json({ "Failed": "Your Order cannot be placed" }) }
    }

    res.json({ "Success": "Successfully placed your order" })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// ROUTE 2: Get New order using: GET "/api/order/neworder". Login required
router.get('/allorder', fetchUser, async (req, res) => {
  try {
    Orders.aggregate([
      {
        $lookup: {
          from: "orderitems",
          localField: '_id',
          foreignField: 'order_id',
          as: 'orderitems'
        }
      }
    ]).exec(function (error, orders) {
      if (error) {
        console.error(error);
      } else {
        res.json(orders);
      }
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// ROUTE 3: Get Specific order using: GET "/api/order/vieworder". Login required
router.get('/vieworder/:order_id', fetchUser, async (req, res) => {
  try {
    Orders.aggregate([
      {
        $match: {
          _id: ObjectId(req.params.order_id),
          user: ObjectId(req.user.id) }
      },
      {
        $lookup: {
          from: "orderitems",
          localField: '_id',
          foreignField: 'order_id',
          as: 'orderitems'
        }
      }
    ]).exec(function (error, orders) {
      if (error) {
        console.error(error);
      } else {
        res.json(orders);
      }
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// ROUTE 3: Get Specific order using: GET "/api/order/vieworder". Login required
router.get('/viewuserorder', fetchUser, async (req, res) => {
  try {
    Orders.aggregate([
      {
        $match: { user: ObjectId(req.user.id) }
      },
      {
        $lookup: {
          from: "orderitems",
          localField: '_id',
          foreignField: 'order_id',
          as: 'orderitems'
        }
      }
    ]).exec(function (error, orders) {
      if (error) {
        console.error(error);
      } else {
        res.json(orders);
      }
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// ROUTE 4: Get orderitem of specific order using: GET "/api/order/orderitem". Login required
router.get('/orderitem/:order_id', fetchUser, async (req, res) => {

  try {

    const orderitem = await Orderitems.find({ order_id: req.params.order_id });
    res.json(orderitem)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// ROUTE 3: Update an existing Order using: PUT "/api/order/updateorder". Login required
router.put('/updateorder/:order_id', fetchUser, async (req, res) => {
  const { status } = req.body;
  try {

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check the Order exist or not
    let order = await Orders.findById({ _id: req.params.order_id })
    if (!order) {
      return res.status(404).send("Order Not Found")
    }
    // Create a newOrder object
    const newOrder = {};
    if (status) { newOrder.status = status };
    order = await Orders.findByIdAndUpdate(req.params.order_id, { $set: newOrder }, { new: true })
    res.json({ order });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})



// ROUTE 4: Get orderitem of specific order using: GET "/api/order/orderitem". Login required
router.get('/allorderitem', async (req, res) => {

  try {

    const orderitem = await Orderitems.find();
    res.json(orderitem)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})


router.get('/vieworder/:item_id/:order_id', fetchUser, async (req, res) => {
  try {
    Orders.aggregate([
      {
        $match: {
          _id: ObjectId(req.params.order_id),
          user: ObjectId(req.user.id)
        }
      },
      {
        $lookup: {
          from: "orderitems",
          localField: '_id',
          foreignField: 'order_id',
          as: 'orderitems'
        }
      },
      {
        $addFields: {
          orderitem: {
            $filter: {
              input: "$orderitems",
              as: "item",
              cond: { $eq: ["$$item._id", ObjectId(req.params.item_id)] }
            }
          }
        }
      }
    ]).exec(function (error, orders) {
      if (error) {
        console.error(error);
      } else {
        const order = orders[0]; // Assuming there is only one matched order
        const orderItem = order.orderitem[0]; // Assuming there is only one matched order item
        delete order.orderitems; // Remove the original orderitems array from the order object
        order.orderitem = orderItem; // Add the specific order item as a property in the order object
        res.json(orders);
      }
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});



module.exports = router