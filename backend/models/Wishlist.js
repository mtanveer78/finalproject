const mongoose = require('mongoose');
const { Schema } = mongoose;

const WishlistSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
  prod_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'products'
	},
	date: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('wishlist', WishlistSchema);