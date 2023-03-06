const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategoriesSchema = new Schema({
	// user: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'user'
	// },
	name: {
		type: String,
		required: true
	},
  slug: {
		type: String,
		required: true,
    unique: true
	},
  description: {
		type: String,
		required: true,
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

module.exports = mongoose.model('categories', CategoriesSchema);
