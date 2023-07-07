const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReviewsSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
  prod_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'products'
	},
  user_review: {
		type: String,
		required: true,
	},
	user_rate: {
		type: Number,
		required: true,
	},
	sentiment: {
		type: Number,
		required: true,
	},
	images: {
		type: [String],
		required: true,
	},
	date: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('reviews', ReviewsSchema);