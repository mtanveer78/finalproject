const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const {multerMiddleware, upload} = require('../middleware/multer');
const Product = require('../models/Product');
const User = require('../models/User');
const Categories = require('../models/Categories');
const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler')


// ROUTE 1: Add a new product using: POST "/api/product/addproduct". Login required
router.post('/addproduct', upload, multerMiddleware, 
	asyncHandler(async (req, res) => {
		try {
			const { catid, name,slug, original_price,selling_price,description,quantity,meta_title,meta_description,images } = req.body;
			console.log(req.body);
			const filenames = req.files.map((file) => file.filename)
			

			const categories = await Categories.findById({_id:catid});
		  if (!categories) { return res.status(404).send("Category Not Found") }
			const data = {
				cat_id:catid,
				name,
				slug,
				original_price,
				selling_price,
				description,
				quantity,
				meta_title,
				meta_description,
				images:filenames
			}
			
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
			const product = new Product(data)
			const savedProduct = await product.save()
		
			res.json(savedProduct)

		} catch (error) {
			console.error(error.message);
			res.status(500).send("Internal Server Error");
		}
	})
	)

// ROUTE 2: Get the Product using: GET "/api/product/fetchallproduct". 
router.get('/fetchallproduct',   async (req, res) => {
	try {
		const product = await Product.find();
		res.json(product)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 3: Get the specific category of all Product using: GET "/api/product/fetchcategoryproduct/cat_id".
router.get('/fetchcategoryproduct/:cat_id', async (req, res) => {
	try {
		const products = await Product.find({cat_id:req.params.cat_id});
		res.json(products)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 4: Get the Sepcific Product using: GET "/api/product/fetchproduct". Login required
router.get('/fetchproduct/:id', async (req, res) => {
	try {
		const product = await Product.findById({_id:req.params.id});
		if (!product) { return res.status(404).send("Not Found") }
		res.json(product)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 5: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updateproduct/:id', fetchUser, async (req, res) => {
	const { cat_id, name,slug,original_price,selling_price,description,quantity,meta_title,meta_description,image } = req.body;
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
		if (meta_title) { newProduct.meta_title = meta_title };
		if (meta_description) { newProduct.meta_description = meta_description };
    if (image) { newProduct.image = image };
		

		// Find the note to be updated and update it
		const product = await Product.findByIdAndUpdate(req.params.id, { $set: newProduct }, { new: true })
    
		if (product.length===0) { return res.status(404).send("Not Found") }
		res.json({"Success":"Successfully update product"})
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 6: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deleteproduct/:id', fetchUser,  async (req, res) => {
	try {

		// Allow deletion only if user is admin
		const user = await User.findById({_id:req.user.id});
		if (user.is_admin===0){
			return res.status(401).send("Not Allowed");
		}

		// Find the note to be delete and delete it
		const product = await Product.findById(req.params.id)
		if (product.length===0) { return res.status(404).send("Not Found") }
		res.json({ "Success": "Product has been deleted", product: product });
		await product.remove()
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

  module.exports = router