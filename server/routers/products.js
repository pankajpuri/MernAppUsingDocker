const { Product } = require("../models/product");
const { checkProductValidation } = require("../validation/validation");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const product = await Product.find();
  res.send(product);
});

router.post("/", async (req, res) => {
  const { error } = await checkProductValidation(req.body);
  if (error) {
    console.log("throwing error");
    return res.status(400).send(error.details[0].message);
  }

  const product = await new Product({
    img: req.body.img,
    brand: req.body.brand,
    model: req.body.model,
    price: req.body.price,
    rating: req.body.rating,
    processor: req.body.processor,
    os: req.body.os,
    graphics: req.body.graphics,
    memory: req.body.memory,
    storage: req.body.storage,
    like: req.body.like,
  });

  product.save();
  res.send(product);
});

router.put("/:id", async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product)
    return console.log("Product with the given id is not found! \n 404 Error!");

  const { error } = await checkProductValidation(req.body);
  if (error) {
    console.log("throwing error");
    return res.status(400).send(error.details[0].message);
  }

  product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      img: req.body.img,
      brand: req.body.brand,
      model: req.body.model,
      price: req.body.price,
      rating: req.body.rating,
      processor: req.body.processor,
      os: req.body.os,
      graphics: req.body.graphics,
      memory: req.body.memory,
      storage: req.body.storage,
      like: req.body.like,
    },
    { new: true }
  );

  res.send(product);
});

module.exports = router;
