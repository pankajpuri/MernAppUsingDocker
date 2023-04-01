const { ProductCategory } = require("../models/productcategory");
const { checkProductCategoryValidation } = require("../validation/validation");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const productcategory = await ProductCategory.find();
  res.send(productcategory);
});

router.post("/", async (req, res) => {
  const { error } = await checkProductCategoryValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const productcategory = await new ProductCategory({
    img: req.body.img,
    browsemenu: req.body.browsemenu,
    header: req.body.header,
    l1: req.body.l1,
    l2: req.body.l2,
    l3: req.body.l3,
    l4: req.body.l4,
    shopbtn: req.body.shopbtn,
    shopbrandbtn: req.body.shopbrandbtn,
  });
  console.log("productcategory", await req.body);
  productcategory.save();
  res.send(productcategory);
});

module.exports = router;
