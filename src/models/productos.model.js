const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const ProductoModel = mongoose.model("productos", ProductoSchema);

module.exports = ProductoModel;
