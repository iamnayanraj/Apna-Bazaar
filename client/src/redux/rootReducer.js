import productReducer from "./slice/productSlice";
import productDetailReducer from "./slice/productDetailSlice";
const rootReducer = {
  productStore: productReducer,
  productDetailStore: productDetailReducer,
};

export default rootReducer;
