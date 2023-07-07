const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const Ratings = require('../models/Ratings');
const User = require('../models/User');
const Product = require('../models/Product');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Add a Rating on product using: POST "/api/rating/addrating". Login required
router.post('/addrating', fetchUser, [
	body('prod_id', 'Enter a valid Product id'),
	body('user_rating', 'Enter rating on product'),], async (req, res) => {
		try {
			const { prod_id, user_rating} = req.body;

			// If there are errors, return Bad request and the errors
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
      //find user already rate this product then not allowed to add rating
      let rating = await Ratings.find({prod_id: prod_id}).find({user: req.user.id})
      if(rating.length>0){return res.json( "you are not allowed to add a rating again")}
      //Create a new rating object and saved
      rating = new Ratings({
        user: req.user.id,prod_id,user_rating
      })
      const savedrating = await rating.save()
      if(!savedrating){return res.json({"failed":"Rating can not added"})}
      res.json(savedrating)
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Internal Server Error");
		}
})

// ROUTE 2: Get the all Rating using: GET "/api/rating/fetchrating". Login required
router.get('/fetchUserrating/:prod_id', fetchUser,   async (req, res) => {
	try {
		const rating = await Ratings.find({prod_id: req.params.prod_id}).find({user: req.user.id});
		res.json(rating)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 3: Get the specific product Rating using: GET "/api/rating/fetchprodrating/:prod_id". Login required
router.get('/fetchprodrating/:prod_id', fetchUser,   async (req, res) => {
	try {
		const rating = await Ratings.find({prod_id: req.params.prod_id});
    //Calculate Average Rating on the bases of products
    let avgrate = rating.map(item => { return item.user_rating})
    avgrate = avgrate.reduce((a,b) => (a+b)) / avgrate.length;
		res.json({rating, avgrate});
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 4: Update an existing Rating using: PUT "/api/rating/updaterating/:prod_id". Login required
router.put('/updaterating/:prod_id', fetchUser, async (req, res) => {
	const { user_rating } = req.body;
	try {

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check the Rating Available
    let rating = await Ratings.find({prod_id:req.params.prod_id}).find({user: req.user.id});
    if(rating.length===0) {
      return res.json("you can not update rating")
    }
      // Create a newRating object
      const newRating = {};
      if (user_rating) { newRating.user_rating = user_rating };
     
      const id = rating.map((item) => {return item._id;})
      rating = await Ratings.findByIdAndUpdate({_id:id}, { $set: newRating }, { new: true })
      if(!rating){ return res.json({ "Failed": "Rating can't be updated"});}
      res.json({ rating });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 5: Delete an existing Rating using: DELETE "/api/cart/deletecart". Login required
router.delete('/deleterating/:prod_id', fetchUser,  async (req, res) => {
	try {

		// Find the Rating to be deleted and delete it
    let rating = await Ratings.find({prod_id:req.params.prod_id}).find({user: req.user.id});
    if(rating.length===0) {
      return res.json("Review can not exist")
    }
    const id = rating.map((item) => {return item._id;})
    rating = await Ratings.findByIdAndDelete({_id:id})
		if(!rating){return res.json("Review can not be deleted")}
		res.json({ "Success": "Review has been deleted", rating: rating });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

module.exports = router