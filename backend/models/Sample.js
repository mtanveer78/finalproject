const mongoose = require('mongoose');
const { Schema } = mongoose;

const SampleSchema = new Schema({
	
	name: {
		type: String,
		required: true
	},
  quantity: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('sample', SampleSchema);
