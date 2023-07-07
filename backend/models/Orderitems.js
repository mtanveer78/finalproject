const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderitemsSchema = new Schema({
	order_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'orders'
	},
  prod_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'products'
	},
	prod_name: {
		type: String,
		required: true
	},
	prod_image: {
		type: String,
		required: true
	},
  prod_qty: {
		type: Number,
		required: true
	},
  price: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('orderitems', OrderitemsSchema);