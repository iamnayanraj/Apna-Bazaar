const express = require("express");
const {
  getProductById,
  createProduct,
  getAllProducts,
  updateProductById,
  deleteProductById,
} = require("../controllers/productController");
const router = express.Router();

router.get("/product", getAllProducts);
router.get("/product/:id", getProductById);
router.post("/product", createProduct);
router.put("/product/:id", updateProductById);
router.delete("/product/:id", deleteProductById);

module.exports = router;
