const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
	cat_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'categories'
	},
	name: {
		type: String,
		required: true
	},
  slug: {
		type: String,
		required: true,
    unique: true
	},
  original_price: {
		type: Number,
		required: true
	},
  selling_price: {
		type: Number,
		required: true
	},
  description: {
		type: String,
		required: true,
	},
  quantity: {
		type: Number,
		required: true
	},
	meta_description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('product', ProductSchema);
