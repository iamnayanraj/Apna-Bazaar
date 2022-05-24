const ProductModel = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const asyncError = require("../middlewares/asyncError");

const getAllProducts = asyncError(async (req, res, next) => {
  const products = await ProductModel.findAll();
  res.status(200).json(products);
});

const getProductById = asyncError(async (req, res, next) => {
  const id = req.params.id;
  const product = await ProductModel.findOne({
    where: {
      productId: id,
    },
  });
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(200).json(product);
});

const createProduct = asyncError(async (req, res, next) => {
  const product = await ProductModel.create(req.body);
  res.status(201).json(product);
});

const updateProductById = asyncError(async (req, res, next) => {
  const id = req.params.id;

  //########  update will return number of rows updated  #########

  // const updatedRows = await ProductModel.update(req.body, {
  //   where: { productId: id },
  // });
  // if(updatedRows==0){
  //   return next(new ErrorHandler("Product Not Found",404));
  // }

  //############ set will return the updated record  ###################

  let product = await ProductModel.findOne({
    where: {
      productId: id,
    },
  });
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  product.set(req.body);
  product = await product.save();
  res.status(200).json(product);
});

const deleteProductById = asyncError(async (req, res, next) => {
  const product = await ProductModel.findOne({
    where: {
      productId: req.params.id,
    },
  });
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  const noOfDeletedRows = await ProductModel.destroy({
    where: {
      productId: req.params.id,
    },
  });
  res.status(200).json({
    message: "Record deleted",
    product,
  });
});

module.exports = {
  getProductById,
  createProduct,
  getAllProducts,
  updateProductById,
  deleteProductById,
};
