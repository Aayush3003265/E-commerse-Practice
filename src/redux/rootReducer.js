import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import productReducer from "./product/productSlice.js";
import userPreferenceReducer from "./userPreferences/userPreferenceSlice.js";
import cartReducer from "./cart/cartSlice.js";
const rootReducer = combineReducers({
  auth: authReducer,
  userPreference: userPreferenceReducer,
  product: productReducer,
  cart: cartReducer,
});
export default rootReducer;
