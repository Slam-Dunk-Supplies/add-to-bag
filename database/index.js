import config from './config.js';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/items', config);

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
