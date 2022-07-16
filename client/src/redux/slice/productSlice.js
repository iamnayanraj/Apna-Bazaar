import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  products: [],
  error: null,
};

export const fetchProducts = createAsyncThunk("products", async () => {
  const { data } = await axios.get("/api/v1/product");
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log(action.error);
      });
  },
});

export const getDataFromProductStore = (state) => {
  return state.productStore;
};

export default productSlice.reducer;
