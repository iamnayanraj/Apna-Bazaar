import React from "react";
import ReactStars from "react-stars";
import "./product.css";

const Product = ({ product }) => {
  console.log(product, product.rating);
  return (
    <>
      <div className="product">
        <img src={product.images[0].url} alt="productimage" />
        <h3 className="product-name">{product.name}</h3>
        <div className="review-stars-large">
          <ReactStars
            count={5}
            size={30}
            edit={false}
            half={true}
            value={product.rating}
          />
        </div>
        <div className="review-stars-medium">
          <ReactStars
            count={5}
            size={20}
            edit={false}
            half={true}
            value={product.rating}
          />
        </div>
        <div className="review-stars-small">
          <ReactStars
            count={5}
            size={10}
            edit={false}
            half={true}
            value={product.rating}
          />
        </div>
        <p className="product-price">&#8377; {product.price}</p>
      </div>
    </>
  );
};

export default Product;
