import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  productDetail: {},
  error: null,
};

export const fetchProductDetail = createAsyncThunk(
  "productDetail",
  async (id) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);
    return data;
  }
);

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetail = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const getDataFromProductDetailStore = (state) => {
  return state.productDetailStore;
};

export default productDetailSlice.reducer;
