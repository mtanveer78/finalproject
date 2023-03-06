const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Reviews = require('../models/Reviews');
const User = require('../models/User');
const Product = require('../models/Product');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Add a Review on product using: POST "/api/review/addreview". Login required
router.post('/addreview', fetchuser, [
	body('prod_id', 'Enter a valid Product id'),
	body('user_review', 'Enter review on product').isLength({ min: 1 }),
	body('user_rate', 'Enter a rate on Product').isLength({min:1}),], async (req, res) => {
		try {
			const { prod_id, user_review,user_rate} = req.body;

			// If there are errors, return Bad request and the errors
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
      let review = await Reviews.find({prod_id: prod_id}).find({user: req.user.id})
      if(review.length>0){return res.json( "you are not allowed to add a review again")}
      review = new Reviews({
        user: req.user.id,prod_id,user_review,user_rate
      })
      const savedreview = await review.save()
      if(!savedreview){return res.json({"failed":"Review can not added"})}
      res.json(savedreview)
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Internal Server Error");
		}
})

// ROUTE 2: Get the all Review using: GET "/api/review/fetchallreview". Login required
router.get('/fetchallreview', fetchuser,   async (req, res) => {
	try {
		const review = await Reviews.find();
		res.json(review)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 2: Get the specific product Review using: GET "/api/review/fetchreview/:prod_id". Login required
router.get('/fetchreview/:prod_id', fetchuser,   async (req, res) => {
	try {
		const review = await Reviews.find({prod_id:req.params.prod_id});
		res.json(review)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 2: Get the specific user on specific product Review using: GET "/api/review/fetchuserreview/:prod_id". Login required
router.get('/fetchuserreview/:prod_id', fetchuser,   async (req, res) => {
	try {
		const review = await Reviews.find({prod_id:req.params.prod_id}).find({user: req.user.id});
		res.json(review)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 4: Update an existing Review using: PUT "/api/review/updatereview/:prod_id". Login required
router.put('/updatereview/:prod_id', fetchuser, async (req, res) => {
	const { user_review, user_rate } = req.body;
	try {

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check the Product and quatity
    let review = await Reviews.find({prod_id:req.params.prod_id}).find({user: req.user.id});
    if(review.length===0) {
      return res.json("you can not update review")
    }
      // Create a newReview object
      const newReview = {};
      if (user_review) { newReview.user_review = user_review };
			if (user_rate) { newReview.user_rate = user_rate };

      const id = review.map((item) => {return item._id;})
      review = await Reviews.findByIdAndUpdate({_id:id}, { $set: newReview }, { new: true })
      if(!review){ return res.json({ "Failed": "Review can't be updated"});}
      res.json({ review });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 4: Delete an existing Cart using: DELETE "/api/cart/deletecart". Login required
router.delete('/deletereview/:prod_id', fetchuser,  async (req, res) => {
	try {

		// Find the note to be delete and delete it
    let review = await Reviews.find({prod_id:req.params.prod_id}).find({user: req.user.id});
    if(review.length===0) {
      return res.json("Review can not exist")
    }
    const id = review.map((item) => {return item._id;})
    review = await Reviews.findByIdAndDelete({_id:id})
		if(!review){return res.json("Review can not be deleted")}
		res.json({ "Success": "Review has been deleted", review: review });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

module.exports = router