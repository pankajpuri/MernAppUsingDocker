const mongoose = require("mongoose");

const productcategoryschema = new mongoose.Schema({
  img: { type: String },
  browsemenu: { type: String },
  header: { type: String },
  l1: { type: String },
  l2: { type: String },
  l3: { type: String },
  l4: { type: String },
  shopbtn: { type: String },
  shopbrandbtn: { type: String },
});
const ProductCategory = mongoose.model(
  "ProductCategory",
  productcategoryschema
);

exports.productcategoryschema = productcategoryschema;
exports.ProductCategory = ProductCategory;
