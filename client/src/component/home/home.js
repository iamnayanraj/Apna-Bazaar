import React from "react";
import { CgMouse } from "react-icons/cg";
import "./home.css";
import HomeBackgroundImage from "../../image/home-background.jpg";
import Product from "../product/product";

const products = [
  {
    name: "Red Tshirt",
    images: [{ url: HomeBackgroundImage }],
    price: "1900",
    id: "test",
    rating: 2.5,
  },
  {
    name: "Blue Tshirt",
    images: [{ url: "test" }],
    price: "1900",
    id: "test",
    rating: 2.5,
  },
  {
    name: "Blue Tshirt",
    images: [{ url: "test" }],
    price: "1900",
    id: "test",
    rating: 2.5,
  },
  {
    name: "Blue Tshirt",
    images: [{ url: "test" }],
    price: "1900",
    id: "test",
    rating: 2.5,
  },
  {
    name: "Blue Tshirt",
    images: [{ url: "test" }],
    price: "1900",
    id: "test",
    rating: 2.5,
  },
  {
    name: "Blue Tshirt",
    images: [{ url: "test" }],
    price: "1900",
    id: "test",
    rating: 2.5,
  },
  {
    name: "Blue Tshirt",
    images: [{ url: "test" }],
    price: "1900",
    id: "test",
    rating: 2.5,
  },
  {
    name: "Blue Tshirt",
    images: [{ url: "test" }],
    price: "1900",
    id: "test",
    rating: 2.5,
  },
];

const Home = () => {
  return (
    <>
      <div className="home-body">
        <div className="home-body-left">
          <img
            className="homebackground-image"
            src={HomeBackgroundImage}
            alt="homebackground"
          />
        </div>
        <div className="home-body-right">
          <h1>Welcome to Apna Bazaar</h1>
          <p>Find Amazing products below</p>
          <a href="#container">
            <button>
              Scroll <CgMouse />
            </button>
          </a>
        </div>
      </div>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-container" id="container">
          {products.map((product) => {
            return <Product product={products[0]} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
