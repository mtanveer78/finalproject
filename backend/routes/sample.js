const express = require('express');
const router = express.Router();
const Sample = require('../models/sample');
const { body } = require('express-validator');



// ROUTE 1: Add a Review on product using: POST "/api/review/addreview". Login required
router.post('/addsample',  [
	body('name', 'Enter name of product').isLength({ min: 1 }),
	body('quantity', 'Enter a quantity of Product')], async (req, res) => {
		try {
			const { name, quantity} = req.body;

			// If there are errors, return Bad request and the errors
			// const errors = validationResult(req);
			// if (!errors.isEmpty()) {
			// 	return res.status(400).json({ errors: errors.array() });
			// }
      // let review = await Reviews.find({prod_id: prod_id}).find({user: req.user.id})
      // if(review.length>0){return res.json( "you are not allowed to add a review again")}
      let sample = new Sample({
        name,quantity
      })
      const savedsample = await sample.save()
      if(!savedsample){return res.json({"failed":"sample can not added"})}
      res.json(savedsample)
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Internal Server Error");
		}
})

// ROUTE 2: Get the all Review using: GET "/api/review/fetchallreview". Login required
router.get('/fetchsample',   async (req, res) => {
	try {
		const sample = await Sample.find();
		res.json(sample)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})


// ROUTE 4: Update an existing Review using: PUT "/api/review/updatereview/:prod_id". Login required
router.put('/updatesample/:prod_id', async (req, res) => {
	const { name, quantity } = req.body;
	try {

    // If there are errors, return Bad request and the errors
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    // Check the Product and quatity
    // let review = await Reviews.find({prod_id:req.params.prod_id}).find({user: req.user.id});
    // if(review.length===0) {
    //   return res.json("you can not update review")
    // }
      // Create a newReview object
      const newsample = {};
      if (name) { newsample.name = name };
			if (quantity) { newsample.quantity = quantity };

      // const id = review.map((item) => {return item._id;})
      const sample = await Sample.findByIdAndUpdate({_id:req.params.prod_id}, { $set: newsample }, { new: true })
      if(!sample){ return res.json({ "Failed": "Review can't be updated"});}
      res.json({ sample });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 4: Delete an existing Cart using: DELETE "/api/cart/deletecart". Login required
router.delete('/deletesample/:prod_id',  async (req, res) => {
	try {

		// Find the note to be delete and delete it
    // let review = await Reviews.find({prod_id:req.params.prod_id}).find({user: req.user.id});
    // if(review.length===0) {
    //   return res.json("Review can not exist")
    // }
    // const id = review.map((item) => {return item._id;})
    const sample = await Sample.findByIdAndDelete({_id:req.params.prod_id})
		if(!sample){return res.json("Sample can not be deleted")}
		res.json({ "Success": "Sample has been deleted", sample: sample });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

module.exports = router