import React from "react";
import ReactStars from "react-stars";
import "./product.css";

const Product = ({ product }) => {
  return (
    <>
      <div className="product">
        <img src={product.productImage} alt="productimage" />
        <h3 className="product-name">{product.productName}</h3>
        <div className="review-stars-large">
          <ReactStars
            count={5}
            size={30}
            edit={false}
            half={true}
            value={product.productRating}
          />
        </div>
        <div className="review-stars-medium">
          <ReactStars
            count={5}
            size={20}
            edit={false}
            half={true}
            value={product.productRating}
          />
        </div>
        <div className="review-stars-small">
          <ReactStars
            count={5}
            size={10}
            edit={false}
            half={true}
            value={product.productRating}
          />
        </div>
        <p className="product-price">&#8377; {product.productPrice}</p>
      </div>
    </>
  );
};

export default Product;
