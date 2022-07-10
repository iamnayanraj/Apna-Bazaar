const Joi = require("joi");

const userLoginSchema = Joi.object({
  productName: Joi.string().alphanum().min(3).max(30).required(),

  productDescription: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,500}$")),

  productPrice: Joi.number().required().min(0).required(),

  productRating: Joi.number().min(0).max(10),

  productImage: Joi.string().required(),

  productCategory: Joi.string().min(3).max(30).required(),
  productNumberOfReviews: Joi.number().integer(),
  productStock: Joi.number().integer(),
});

module.exports = { createUpdateProductSchema };
