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

CategoriesSchema.pre('remove', async function (next) {
  try {
    const product = mongoose.model('product');
    // Remove ad reference from all child User documents
		const Child = await mongoose.model('product').find({cat_id: this._id});
		for (const product of Child) {
			
      const Grandchild1 = await mongoose.model('cart').find({prod_id: product._id});
			for (const cart of Grandchild1) {
				await cart.remove();
			}
    }
    await product.deleteMany({cat_id: this._id}).exec();
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('categories', CategoriesSchema);
