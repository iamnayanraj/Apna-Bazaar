const Joi = require("joi");
const {
  createUpdateProductSchema,
} = require("../schemas/productSchema/createUpdateProductSchema");
const ErrorHandler = require("../utils/errorHandler");
const asyncError = require("./asyncError");

const schemaValidation = asyncError(async (req, res, next) => {
  let schema;
  if (req.url.split("/").includes("product")) {
    if (req.method == "POST" || req.method == "PUT") {
      schema = createUpdateProductSchema;
    }
  }
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    next(new ErrorHandler(error.message, 400));
  }
});

module.exports = { schemaValidation };
