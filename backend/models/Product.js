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
	meta_title: {
		type: String,
		required: true,
	},
	meta_description: {
		type: String,
		required: true,
	},
	images: {
		type: [String],
		required: true,
	},
	date: {
		type: Date,
		default: Date.now
	}
});

ProductSchema.pre('remove', async function (next) {
  try {
    const cart = mongoose.model('cart');
		const wishlist = mongoose.model('wishlist');
    // Remove ad reference from all child User documents
    await cart.deleteMany({prod_id: this._id}).exec();
		await wishlist.deleteMany({prod_id: this._id}).exec();
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('product', ProductSchema);
