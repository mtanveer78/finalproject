const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrdersSchema = new Schema({
  user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
  name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
	},
	contact: {
		type: Number,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	country: {
		type: String,
		default: "Pakistan"
	},
	zip: {
		type: Number,
		default: "32102"
	},
  total_price: {
		type: Number,
		required: true
	},
  payment_mode: {
		type: String,
		default: "COD"
	},
  status: {
		type: String,
		default: 'processing'
	},
  message: {
		type: String,
		default: "Nothing"
	},
  tracking_no: {
		type: String,
		default: "user123"
	}
},
 {timestamps: true});
const User = mongoose.model('orders', OrdersSchema);
module.exports = User;