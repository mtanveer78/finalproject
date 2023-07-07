const express = require('express');
const router = express.Router();
const fetchAdmin = require('../middleware/fetchAdmin');
const {multerMiddleware, upload} = require('../middleware/multer');
const Categories = require('../models/Categories');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler')


// ROUTE 1: Add a new category using: POST "/api/category/addcategory". Login required
router.post('/addcategory', fetchAdmin, upload, multerMiddleware, asyncHandler(async (req, res) => {
  // Check if authError exists in the req object
  if (req.authError) {
    // Handle the authentication error
    return res.status(req.authError.status).json({ error: req.authError.message });
  }

  try {
    const { name, slug, description, meta_title, meta_description } = req.body;
    const filenames = req.files.map((file) => file.filename);
    const data = {
      name,
      slug,
      description,
      meta_title,
      meta_description,
      images: filenames,
    };

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const categories = new Categories(data);
    const savedCategories = await categories.save();

    res.json(savedCategories);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
}));


// ROUTE 2: Get the all categories using: GET "/api/category/fetchallcategories".
router.get('/fetchallcategories', async (req, res) => {
	try {
		
		const categories = await Categories.find();
		if (categories.length===0) { return res.status(404).send("Not Found") }
		res.json(categories)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 3: Get the specific category using: GET "/api/category/fetchcategory/:slug".
router.get('/fetchcategory/:id', async (req, res) => {
	try {
		const categories = await Categories.findById(req.params.id);
		if (categories.length===0) { return res.status(404).send("Not Found") }
		res.json(categories)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 4: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updatecategory/:id', fetchAdmin, async (req, res) => {
	const { name,slug,description,meta_title,meta_description,image } = req.body;
	try {
   
		// Create a newNote object
		const newCategory = {};
		if (name) { newCategory.name = name };
    if (slug) { newCategory.slug = slug };
    if (description) { newCategory.description = description };
		if (meta_title) { newCategory.meta_title = meta_title };
		if (meta_description) { newCategory.meta_description = meta_description };
    if (image) { newCategory.image = image };
		
		// Find the note to be updated and update it
		const category = await Categories.findByIdAndUpdate(req.params.id, { $set: newCategory }, { new: true })
    if (category.length===0) { return res.status(404).send("Not Found") }
		res.json({"Success":"Successfully update category"})
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 5: Delete an existing Category using: DELETE "/api/category/deletecategory". Login required
router.delete('/deletecategory/:id', fetchAdmin, async (req, res) => {
	try {
		// Find the note to be delete and delete it
		const category = await Categories.findById(req.params.id)
		if (category.length===0) { return res.status(404).send("Not Found") }
		res.json({ "Success": "Category has been deleted", category: category });
		await category.remove()
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

module.exports = router