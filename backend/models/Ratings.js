const mongoose = require('mongoose');
const { Schema } = mongoose;

const RatingsSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
  prod_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'products'
	},
  user_rating: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('ratings', RatingsSchema);