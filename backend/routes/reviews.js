const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const { multerMiddleware, upload } = require('../middleware/multer');
const Reviews = require('../models/Reviews');
const asyncHandler = require('express-async-handler')
const User = require('../models/User');
const Product = require('../models/Product');
const { body, validationResult } = require('express-validator');



// ROUTE 1: Add a Review on product using: POST "/api/review/addreview". Login required
router.post('/addreview', fetchUser, upload, multerMiddleware, asyncHandler(async (req, res) => {
	// Check if authError exists in the req object
	if (req.authError) {
		// Handle the authentication error
		return res.status(req.authError.status).json({ error: req.authError.message });
	}

	try {
		const { prod_id, user_review, sentiment, user_rate } = req.body;
		const filenames = req.files.map((file) => file.filename);

		// If there are errors, return Bad request and the errors
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		let checkreview = await Reviews.find({ prod_id: prod_id }).find({ user: req.user.id })
		if (checkreview.length > 0) { return res.json({"failed":"you are not allowed to add a review again"}) }
		const newreview = new Reviews({
			user: req.user.id, prod_id, user_review, user_rate, sentiment, images: filenames
		})
		const savedreview = await newreview.save()
		if (!savedreview) { return res.json({ "failed": "Review can not added" }) }
		res.json({"success": "Sucessfully added review",savedreview})
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
}))

// ROUTE 2: Get the all Review using: GET "/api/review/fetchallreview". Login required
router.get('/fetchallreview', fetchUser, async (req, res) => {
	try {
		const review = await Reviews.find();
		res.json(review)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 2: Get the specific product Review using: GET "/api/review/fetchreview/:prod_id". Login required
router.get('/fetchreview/:prod_id', fetchUser, async (req, res) => {
	try {
		const review = await Reviews.find({ prod_id: req.params.prod_id });
		res.json(review)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 2: Get the specific user on specific product Review using: GET "/api/review/fetchUserreview/:prod_id". Login required
router.get('/fetchUserreview/:prod_id', fetchUser, async (req, res) => {
	try {
		const review = await Reviews.find({ prod_id: req.params.prod_id }).find({ user: req.user.id });
		res.json(review)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 4: Update an existing Review using: PUT "/api/review/updatereview/:prod_id". Login required
router.put('/updatereview/:prod_id', fetchUser, async (req, res) => {
	const { user_review, user_rate } = req.body;
	try {

		// If there are errors, return Bad request and the errors
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		// Check the Product and quatity
		let review = await Reviews.find({ prod_id: req.params.prod_id }).find({ user: req.user.id });
		if (review.length === 0) {
			return res.json("you can not update review")
		}
		// Create a newReview object
		const newReview = {};
		if (user_review) { newReview.user_review = user_review };
		if (user_rate) { newReview.user_rate = user_rate };

		const id = review.map((item) => { return item._id; })
		review = await Reviews.findByIdAndUpdate({ _id: id }, { $set: newReview }, { new: true })
		if (!review) { return res.json({ "Failed": "Review can't be updated" }); }
		res.json({ review });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 4: Delete an existing Cart using: DELETE "/api/cart/deletecart". Login required
router.delete('/deletereview/:prod_id', fetchUser, async (req, res) => {
	try {

		// Find the note to be delete and delete it
		let review = await Reviews.find({ prod_id: req.params.prod_id }).find({ user: req.user.id });
		if (review.length === 0) {
			return res.json("Review can not exist")
		}
		const id = review.map((item) => { return item._id; })
		review = await Reviews.findByIdAndDelete({ _id: id })
		if (!review) { return res.json("Review can not be deleted") }
		res.json({ "Success": "Review has been deleted", review: review });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})




router.get('/listupreview', async (req, res) => {
	try {
		const review = await Reviews.find();
		// Merge the list and calculate the average sentiment based on prod_id property
		const mergedList = review.reduce((result, currentProduct) => {
			const existingProduct = result.find(p => p.prod_id === currentProduct.prod_id);

			if (existingProduct) {
				// Merge the properties of the current product with the existing one
				existingProduct.user_review += currentProduct.user_review;
				existingProduct.sentimentSum += currentProduct.user_rate;
				existingProduct.sentimentCount += 1;
			} else {
				// Add the current product to the result list
				result.push({
					...currentProduct,
					sentimentSum: currentProduct.user_rate,
					sentimentCount: 1
				});
			}

			return result;
		}, []);

		// Calculate the average sentiment for each product
		mergedList.forEach(product => {
			product.user_rate = product.sentimentSum / product.sentimentCount;
			delete product.sentimentSum;
			delete product.sentimentCount;
		});

		// Send the merged list with the average sentiment as the response
		res.json(mergedList);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
});










module.exports = router