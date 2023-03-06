const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Cart = require('../models/Cart');
const Orders = require('../models/Orders');
const Orderitems = require('../models/Orderitems');
const User = require('../models/User');
const Product = require('../models/Product');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Place order using: POST "/api/order/placeorder". Login required
router.post('/placeorder', fetchuser, [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('contact', 'Enter a valid contact').isMobilePhone(),
  body('address', 'Enter a valid address').isLength({ min: 3 }),
  body('country', 'Enter a valide Country').isLength({ min: 2 }),
  body('city', 'Enter a valid city').isLength({ min: 2 }),
  body('state', 'Enter a valid state').isLength({ min: 2 }),
  body('zip', 'Enter a valide Zip').isLength({ min: 5 }),
  body('total_price', 'Enter a total price').isLength({ min: 1 }),
  body('message', 'Enter a valid message').isLength({ min: 1 }),
], async (req, res) => {
  try {
    const { name, email, contact, address, country, city, state, zip, total_price, message } = req.body;

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let cart = await Cart.find({ user: req.user.id })
    // Check the Product and quatity
    let delcart = []


    if (cart.length === 0) { return res.json("Your Cart is empty") }
    for (var cartitem of cart) {
      let product = await Product.findById({ _id: cartitem.prod_id })
      if (product.quantity < cartitem.prod_qty) {
        delcart = await Cart.findByIdAndDelete({ _id: cartitem.id })
      }
    }
    if (delcart.length > 0) { return res.json("Your Order cannot be proceded") }
    const order = new Orders({
      user: req.user.id, name, email, contact, address, country, city, state, zip, total_price, message
    })
    const savedOrder = await order.save()
    if (!savedOrder) { return res.json("Your Order cannot be placed") }
    for (var cartitem of cart) {
      let product = await Product.findById({ _id: cartitem.prod_id })
      const orderitems = new Orderitems({
        order_id: savedOrder.id, prod_id: product.id, prod_qty: cartitem.prod_qty, price: product.selling_price
      })
      const savedOrderitem = await orderitems.save()
      delcart = await Cart.findByIdAndDelete({ _id: cartitem.id })
    }

    res.json("Successfully palced your order")

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// ROUTE 2: Get New order using: GET "/api/order/neworder". Login required
router.get('/allorder', fetchuser, async (req, res) => {
  try {
    // Allow Updation only if user is admin
    const user = await User.findById({ _id: req.user.id });
    if (user.is_admin === 0) {
      return res.status(401).send("Not Allowed");
    }
    const neworder = await Orders.find();
    res.json(neworder)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// ROUTE 3: Get Specific order using: GET "/api/order/vieworder". Login required
router.get('/vieworder/:order_id', fetchuser, async (req, res) => {

  try {
    
    const vieworder = await Orders.findById({ _id:req.params.order_id});
    res.json(vieworder)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// ROUTE 4: Get orderitem of specific order using: GET "/api/order/orderitem". Login required
router.get('/orderitem/:order_id', fetchuser, async (req, res) => {

  try {
    
    const orderitem = await Orderitems.find({ order_id:req.params.order_id});
    res.json(orderitem)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// ROUTE 3: Update an existing Order using: PUT "/api/order/updateorder". Login required
router.put('/updateorder/:order_id', fetchuser, async (req, res) => {
	const { status } = req.body;
	try {

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check the Order exist or not
    let order = await Orders.findById({_id: req.params.order_id})
    if(!order) {
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

module.exports = router