const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Categories = require('../models/Categories');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


// ROUTE 1: Add a new category using: POST "/api/category/addcategory". Login required
router.post('/addcategory', fetchuser,  [
	body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('slug', 'Enter a valid slug').isLength({ min: 3 }),
  body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
  body('meta_description', 'Meta description must be atleast 5 characters').isLength({ min: 5 }),
  body('image', 'Upload image').isLength({ min: 5 }),
 
], async (req, res) => {
		try {
			const { name,slug,description,meta_description,image } = req.body;
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

			const categories = new Categories({
				name,slug,description,meta_description,image
			})
			const savedCategories = await categories.save()

			res.json(savedCategories)

		} catch (error) {
			console.error(error.message);
			res.status(500).send("Internal Server Error");
		}
	})

// ROUTE 2: Get the all categories using: GET "/api/category/fetchallcategories". Login required
router.get('/fetchallcategories', async (req, res) => {
	try {
		// const {slug} = req.body
		const categories = await Categories.find();
		if (categories.length===0) { return res.status(404).send("Not Found") }
		res.json(categories)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 3: Get the specific category using: GET "/api/category/fetchcategory/:slug". Login required
router.get('/fetchcategory/:slug', async (req, res) => {
	try {
		const categories = await Categories.find({slug:req.params.slug});
		if (categories.length===0) { return res.status(404).send("Not Found") }
		res.json(categories)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 4: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updatecategory/:slug', fetchuser, async (req, res) => {
	const { name,slug,description,meta_description,image } = req.body;
	try {
   
		// Create a newNote object
		const newCategory = {};
		if (name) { newCategory.name = name };
    if (slug) { newCategory.slug = slug };
    if (description) { newCategory.description = description };
		if (meta_description) { newCategory.meta_description = meta_description };
    if (image) { newCategory.image = image };
		
		// Allow Updation only if user is admin
		const user = await User.findById({_id:req.user.id});
			if (user.is_admin===0){
				return res.status(401).send("Not Allowed");
			}
		// Find the note to be updated and update it
		let category = await Categories.find({slug:req.params.slug});
		if (category.length===0) { return res.status(404).send("Not Found") }
   
		category = await Categories.findOneAndUpdate({slug:req.params.slug}, { $set: newCategory }, { new: true })
    
		res.json({ category });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 5: Delete an existing Category using: DELETE "/api/category/deletecategory". Login required
router.delete('/deletecategory/:slug', fetchuser, async (req, res) => {
	try {
		// Allow deletion only if user is admin
		const user = await User.findById({_id:req.user.id});
			if (user.is_admin===0){
				return res.status(401).send("Not Allowed");
			}
		// Find the note to be delete and delete it
		let category = await Categories.find({slug:req.params.slug});
		if (category.length===0) { return res.status(404).send("Not Found") }


		category = await Categories.findOneAndDelete({slug:req.params.slug})
		res.json({ "Success": "Note has been deleted", category: category });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

  module.exports = router