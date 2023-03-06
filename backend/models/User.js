const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	is_admin: {
		type: Number,
		default: 0
	},
	contact: {
		type: Number,
		required: true
	},
	address: {
		type: String,
		default: "NAN"
	},
	city: {
		type: String,
		default: "NAN"
	},
	state: {
		type: String,
		default: "NAN"
	},
	country: {
		type: String,
		default: "NAN"
	},
	pincode: {
		type: Number,
		default: "32102"
	},
	date: {
		type: Date,
		default: Date.now
	},
});
const User = mongoose.model('user', UserSchema);
module.exports = User;