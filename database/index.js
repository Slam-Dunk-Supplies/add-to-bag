const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/items', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const itemSchema = mongoose.Schema({
  id: Number,
  category: String,
  name: String,
  price: Number,
  heart: Boolean,
  sizes: Array,
  color: String,
});

const Item = mongoose.model('Item', itemSchema);

module.exports.Item = Item;
