const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const Wishlist = require('../models/Wishlist');
const User = require('../models/User');
const Product = require('../models/Product');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Add a new Product in Wishlist using: POST "/api/wishlist/addwishlist". Login required
router.post('/addwishlist', fetchUser, [
	body('prod_id', 'Enter a valid Product id')], async (req, res) => {
		try {
			const { prod_id} = req.body;

			// If there are errors, return Bad request and the errors
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}
      // Check the Product
      let product = await Product.findById({_id:prod_id})
      if(!product) {
        return res.json({"Failed":"Product Not Found"})
      }
      let pre_wishlist = await Wishlist.find({prod_id:prod_id}).find({user: req.user.id})
      if(pre_wishlist.length>0){return res.json({"Failed":"This product already added in the wishlist"}); }
      //If quantity is available in store
        const wishlist = new Wishlist({
          user: req.user.id,prod_id
        })
        // Save Wishlist
        const savedWishlist = await wishlist.save()
        if(!savedWishlist)  {
          return res.json({ "failed": "Product can not be Added Wishlist"});
        }
        res.json({ "Success": "Product Added to Wishlist successfully"})

		} catch (error) {
			console.error(error.message);
			res.status(500).send("Internal Server Error");
		}
})

// ROUTE 2: Get the wishlist using: GET "/api/cart/fetchwishlist". Login required
router.get('/fetchwishlist', fetchUser,   async (req, res) => {
	try {
		// let wishlist = await Wishlist.find({$expr:{prod_id:prod_id , user: req.user.id}})
		const wishlist = await Wishlist.find({user: req.user.id});
    // if(wishlist.length===0){return res.json("Wishlist is Empty");}
		res.json(wishlist)
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

// ROUTE 3: Delete an existing Cart using: DELETE "/api/cart/deletecart". Login required
router.delete('/deletewishlist/:prod_id', fetchUser,  async (req, res) => {
	try {

		// Find the product to be deleted and delete it
    // let wishlist = await Wishlist.find({prod_id:req.params.prod_id}).find({user: req.user.id})
		let wishlist = await Wishlist.findOneAndDelete({$and: [{prod_id:req.params.prod_id},{user_id: req.user.id} ],})
		// const id = wishlist.map((item) => {return item._id;})
    // wishlist = await Wishlist.findByIdAndDelete({_id:id})
    //if product not found from wishlist
    if(!wishlist){ return res.json({ "failed": "Product can not exist in wishlist"});}
		res.json({ "Success": "Product has been deleted from wishlist", wishlist: wishlist });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Internal Server Error");
	}
})

module.exports = router