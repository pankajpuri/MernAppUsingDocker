const Joi = require("joi");

module.exports.checkMessageValidation = function (messageschema) {
  const schema = {
    message: Joi.string().required(),
  };
  return Joi.validate(messageschema, schema);
};

module.exports.checkProductCategoryValidation = function (
  productcategorychema
) {
  const schema = {
    img: Joi.string(),
    browsemenu: Joi.string(),
    header: Joi.string(),
    l1: Joi.string(),
    l2: Joi.string(),
    l3: Joi.string(),
    l4: Joi.string(),
    shopbtn: Joi.string(),
    shopbrandbtn: Joi.string(),
  };
  return Joi.validate(productcategorychema, schema);
};

module.exports.checkProductValidation = function (productSchema) {
  const schema = {
    img: Joi.string(),
    brand: Joi.string(),
    model: Joi.string(),

    price: Joi.number(),

    rating: Joi.number(),

    processor: Joi.string(),
    os: Joi.string(),
    graphics: Joi.string(),
    memory: Joi.string(),
    storage: Joi.string(),
    like: Joi.boolean(),
  };
  return Joi.validate(productSchema, schema);
};
