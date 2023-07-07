const mongoose = require('mongoose');
const { Schema } = mongoose;

const FlashsaleSchema = new Schema({
  prod_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'products'
	},
	sale_date: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('flashsale', FlashsaleSchema);