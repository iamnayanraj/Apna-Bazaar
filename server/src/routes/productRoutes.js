const express = require("express");
const {
  getProductById,
  createProduct,
  getAllProducts,
  updateProductById,
  deleteProductById,
} = require("../controllers/productController");
const { authorizedUser } = require("../middlewares/authorizedUser");
const { isAuthenticatedUser } = require("../middlewares/isAuthenticatedUser");
const router = express.Router();

router.get("/product", getAllProducts);
router.get("/product/:id", getProductById);
router.post(
  "/product",
  isAuthenticatedUser,
  authorizedUser("admin"),
  createProduct
);
router.put(
  "/product/:id",
  isAuthenticatedUser,
  authorizedUser("admin"),
  updateProductById
);
router.delete(
  "/product/:id",
  isAuthenticatedUser,
  authorizedUser("admin"),
  deleteProductById
);

module.exports = router;
