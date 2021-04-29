const { model, Schema } = require('mongoose');

const categorySchema = new Schema({
  names: String
});

module.exports = model('Category', categorySchema);
