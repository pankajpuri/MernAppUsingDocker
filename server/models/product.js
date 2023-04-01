const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  img: { type: String },
  brand: { type: String },
  model: { type: String },
  price: { type: Number },
  rating: { type: Number },
  processor: { type: String },
  os: { type: String },
  graphics: { type: String },
  memory: { type: String },
  storage: { type: String },
  like: { type: Boolean },
});
const Product = mongoose.model("Product", productSchema);

exports.productSchema = productSchema;
exports.Product = Product;
