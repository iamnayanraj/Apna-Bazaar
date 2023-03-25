import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchProductDetail,
  getDataFromProductDetailStore,
} from "../../redux/slice/productDetailSlice";

const ProductDetail = () => {
  const param = useParams();
  const id = Number(param.id);
  const dispatch = useDispatch();
  const { loading, productDetail, error } = useSelector(
    getDataFromProductDetailStore
  );
  useEffect(() => {
    if (error) {
      alert(error);
    }
    dispatch(fetchProductDetail(id));
  }, [dispatch, error]);

  console.log(productDetail);
  return <>jfjf</>;
};

export default ProductDetail;
