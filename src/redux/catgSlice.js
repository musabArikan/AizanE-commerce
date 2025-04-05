import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAKE_APİ } from "../utils/api/baseUrl";
import axios from "axios";
const initialState = {
  categories: [],
};
export const getCategories = createAsyncThunk("category", async () => {
  const response = await axios.get(`${FAKE_APİ}/products/categories`);
  return response.data;
});
const catgSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload || [];
    });
  },
});
export default catgSlice.reducer;
