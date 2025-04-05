import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../utils/status/status";
import { FAKE_APİ } from "../utils/api/baseUrl";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getproducts", async () => {
  const response = await axios.get(`${FAKE_APİ}/products`);
  return response.data;
});
export const getCategoryProducts = createAsyncThunk(
  "getcategory",
  async (category) => {
    const response = await axios.get(
      `${FAKE_APİ}/products/category/${category}`
    );
    return response.data;
  }
);
export const getDetailProducts = createAsyncThunk(
  "getproductsdetail",
  async (id) => {
    const response = await axios.get(`${FAKE_APİ}/products/${id}`);
    return response.data;
  }
);
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      })

      .addCase(getDetailProducts.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getDetailProducts.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })
      .addCase(getDetailProducts.rejected, (state, action) => {
        state.productDetailStatus = STATUS.FAIL;
      })

      .addCase(getCategoryProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getCategoryProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      });
  },
});

export default productSlice.reducer;
