import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import userPreferenceReducer from "./userPreferences/userPreferenceSlice.js";
const rootReducer = combineReducers({
  auth: authReducer,
  userPreference: userPreferenceReducer,
});
export default rootReducer;
