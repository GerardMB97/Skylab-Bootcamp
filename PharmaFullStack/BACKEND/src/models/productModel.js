const { model, Schema } = require('mongoose');

const productSchema = new Schema({
  name: String,
  price: Number,
  image: String,
  stock: Number,
  category: { type: Schema.Types.ObjectId, ref: 'Category' }

});

module.exports = model('Product', productSchema);
