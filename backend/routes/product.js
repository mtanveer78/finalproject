const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Product = require('../models/Product');
const User = require('../models/User');
const Categories = require('../models/Categories');
const { body, validationResult } = require('express-validator');


// ROUTE 1: Add a new product using: POST "/api/product/addproduct". Login required
router.post('/addproduct', fetchuser,  [
	body('cat_id', 'Enter a valid category ID'),
	body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('slug', 'Enter a valid slug').isLength({ min: 3 }),
	body('original_price', 'Enter original price').isLength({ min: 1 }),
  body('selling_price', 'Enter original price').isLength({ min: 1 }),
  body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
  body('quantity', 'Quantity').isLength({ min: 1 }),
  body('meta_description', 'Meta description must be atleast 5 characters').isLength({ min: 5 }),
	body('image', 'upload image').isLength({ min: 5 }),
 
], async (req, res) => {
		try {
			const { cat_id, name,slug,original_price,selling_price,description,quantity,meta_description,image } = req.body;

			const categories = await Categories.findById({_id:cat_id});
		  if (!categories) { return res.status(404).send("Category Not Found") }

			// Allow creation only if user is admin
			const user = await User.findById({_id:req.user.id});
			if (user.is_admin===0){
				return res.status(401).send("Not Allowed");
			}
			// If there are errors, return Bad request and the errors
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
			const product = new Product({
				cat_id,name,slug,original_price,selling_price,description,quantity,meta_description,image
			})
			const savedProduct = await product.save()

			res.json(savedProduct)

		} catch (error) {
			console.error(error.message);
			res.status(500).send("Internal Server Error");
		}
	})

// ROUTE 2: Get the Product using: GET "/api/product/fetchallproduct". Login required
router.get('/fetchallproduct', fetchuser,   async (req, res) => {
	try {
		const product = await Product.find();
		res.json(product)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 3: Get the Sepcific Product using: GET "/api/product/fetchproduct". Login required
router.get('/fetchproduct/:id', fetchuser,   async (req, res) => {
	try {
		const product = await Product.findById({_id:req.params.id});
		if (!product) { return res.status(404).send("Not Found") }
		res.json(product)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 4: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updateproduct/:slug', fetchuser, async (req, res) => {
	const { cat_id, name,slug,original_price,selling_price,description,quantity,meta_description,image } = req.body;
	try {
		
		// Allow Updation only if user is admin
		const user = await User.findById({_id:req.user.id});
		if (user.is_admin===0){
			return res.status(401).send("Not Allowed");
		}

		// Create a newNote object
		const newProduct = {};
		if (cat_id) { newProduct.cat_id = cat_id };
		if (name) { newProduct.name = name };
    if (slug) { newProduct.slug = slug };
		if (original_price) { newProduct.original_price = original_price };
		if (selling_price) { newProduct.selling_price = selling_price };
    if (description) { newProduct.description = description };
		if (quantity) { newProduct.quantity = quantity };
		if (meta_description) { newProduct.meta_description = meta_description };
    if (image) { newProduct.image = image };
		

		// Find the note to be updated and update it
		let product = await Product.find({slug:req.params.slug});
		const categories = await Categories.findById(cat_id);
		if (product.length===0 || !categories) { return res.status(404).send("Not Found") }
   
		product = await Product.findOneAndUpdate({slug:req.params.slug}, { $set: newProduct }, { new: true })
    
		res.json({ product });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deleteproduct/:slug', fetchuser,  async (req, res) => {
	try {

		// Allow deletion only if user is admin
		const user = await User.findById({_id:req.user.id});
		if (user.is_admin===0){
			return res.status(401).send("Not Allowed");
		}

		// Find the note to be delete and delete it
		let product = await Product.find({ slug:req.params.slug });
		if (product.length===0) { return res.status(404).send("Not Found") }

		// console.log(product)
		product = await Product.findOneAndDelete({ slug:req.params.slug })
		res.json({ "Success": "Note has been deleted", product: product });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

  module.exports = router