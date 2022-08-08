import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./features/cart/cartSlice";
import cartReducer from "./features/cart/cartSlice";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
