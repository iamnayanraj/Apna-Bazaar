const { DataTypes } = require("sequelize");
const sequelize = require("../db/conn");
const ProductModel = sequelize.define(
  "productModel",
  {
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true, // necessary because without it sequelize will find a PK ID in DB
      autoIncrement: true, // necessary becaude without it it will send null to db and db cannot store any explicit value and null not at all.
      field: "ProductId",
    },
    productDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "ProductDescription",
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "ProductName",
    },
    productPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: "ProductPrice",
    },
    productRating: {
      type: DataTypes.FLOAT,
      field: "ProductRating",
    },
    productImage: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "ProductImage",
    },
    productCategory: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "ProductCategory",
    },
    productStock: {
      type: DataTypes.INTEGER,
      field: "ProductStock",
    },
    productNumberOfReviews: {
      type: DataTypes.INTEGER,
      field: "ProductNumberOfReviews",
    },
    productCreatedBy: {
      type: DataTypes.INTEGER,
      field: "ProductCreatedBy",
    },
  },
  {
    tableName: "Product",
  }
);

module.exports = ProductModel;
