import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import productReducer from "./product/productSlice.js";
import userPreferenceReducer from "./userPreferences/userPreferenceSlice.js";
const rootReducer = combineReducers({
  auth: authReducer,
  userPreference: userPreferenceReducer,
  product: productReducer,
});
export default rootReducer;
