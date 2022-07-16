import React, { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./home.css";
import HomeBackgroundImage from "../../image/home-background.jpg";
import Product from "../product/product";
import MetaData from "../layout/metadata";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  getDataFromProductStore,
} from "../../redux/slice/productSlice";
import Loader from "../layout/loader/loader";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(getDataFromProductStore);
  useEffect(() => {
    if (error) {
      alert(error);
    }
    dispatch(fetchProducts());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Apna Bazaar" />
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
              {products &&
                products.map((product) => {
                  return <Product key={product.productId} product={product} />;
                })}
            </div>
          </div>
        </>
      )}
      {/* <Loader /> */}
    </>
  );
};

export default Home;
