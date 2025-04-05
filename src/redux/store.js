import { configureStore } from "@reduxjs/toolkit";
import catgSlice from "./catgSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
export const store = configureStore({
  reducer: {
    categories: catgSlice,
    products: productSlice,
    carts: cartSlice,
  },
});
