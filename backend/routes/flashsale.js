const express = require('express');
const router = express.Router();
const fetchAdmin = require('../middleware/fetchAdmin');
const Flashsale = require('../models/Flashsale');
const Product = require('../models/Product');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
var ObjectId = require('mongodb').ObjectId;

// ROUTE 1: Add a new Product to Flash sale using: POST "/api/flashsale/addflashsale". Login required
router.post('/addflashsale', fetchAdmin, [
  body('prod_id', 'Enter a valid Product id'),
  body('sale_date', 'Enter flashsale date')], async (req, res) => {
    try {
      const { prod_id, sale_date } = req.body;

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
      let sale = await Flashsale.find({ prod_id: prod_id })
      if (sale.length > 0) { return res.json({ "Failed": "This product already added in the flashsale" }); }
      // Create a new flashsale object
        const flashsale = new Flashsale({
          prod_id, sale_date
        })
        // Save Flashsale to the database
        const savedflashsale = await flashsale.save()
        if (!savedflashsale) {
          return res.json({ "failed": "Product has not been Added in Flash sale" });
        }
        res.json({ "Success": "Product has been added into Flash sale" })
      
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })

// ROUTE 2: Get the specific Product from Flash sale using: GET "/api/flashsale/fetchflashslae/:_id".
router.get('/fetchflashslae/:_id', async (req, res) => {
	try {

    Flashsale.aggregate([
      {
        $match: { _id: ObjectId(req.params._id) }
      },
      {
        $lookup: {
          from: "products",
          localField: "prod_id",
          foreignField: "_id",
          as: "product_info"
        }
      }
    ]).exec(function (error, sale) {
      if (error) {
        console.error(error);
      } else {
        res.json(sale[0]);
      }
    });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 3: Get the all Product from Flash sale using: GET "/api/flashsale/fetchallflashsale".
router.get('/fetchallflashsale', async (req, res) => {
	try {
     // If there are errors, return Bad request and the errors
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }

    Flashsale.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "prod_id",
          foreignField: "_id",
          as: "product_info"
        }
      }
    ]).exec(function (error, sale) {
      if (error) {
        console.error(error);
      } else {
        res.json(sale);
      }
    });

	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 4: Update an existing Product from Flash sale using: PUT "/api/flashsale/updateflashsale/:_id". Login required
router.put('/updateflashsale/:_id', fetchAdmin, async (req, res) => {
	const { sale_date } = req.body;
	try {

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check the product already exist or not
    let sale = await Flashsale.findById({_id: req.params._id})
    if(!sale) {
      return res.status(404).send("product not found")
    }
    // Create a newFlashsale object
    const newFlashsale = {};
    if (sale_date) { newFlashsale.sale_date = sale_date };
    const flashsale = await Flashsale.findByIdAndUpdate(req.params._id, { $set: newFlashsale }, { new: true })
    res.json({"Success": "Product has been Updated in flash sale", flashsale:flashsale });
    
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 5: Delete an existing product from flash sale using: DELETE "/api/flashsale/deletefalshsale/:_id". Login required
router.delete('/deletefalshsale/:_id', fetchAdmin, async (req, res) => {
  try {
    // Allow creation only if user is admin
    const user = await User.findById({_id:req.user.id});
    if (user.is_admin===0){
      return res.status(401).send("Not Allowed");
    }
    // Find the prod to be delete and delete it
    let sale = await Flashsale.findById( req.params._id );
    if (!sale) { return res.json("Product not found"); }

    const flashsale = await Flashsale.findByIdAndDelete(req.params._id )
    if (!flashsale) {
      return res.json({ "failed": "Product can not be deleted from Flash sale" });
    }
    res.json({ "Success": "product has been deleted from Flash sale", flashsale: flashsale });
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

module.exports = router