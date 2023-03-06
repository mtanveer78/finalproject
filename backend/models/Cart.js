const mongoose = require('mongoose');
const { Schema } = mongoose;

const CartSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
  prod_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'products'
	},
	prod_qty: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('cart', CartSchema);