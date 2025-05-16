const { configureStore } = require("@reduxjs/toolkit");
import authReducer from "./auth/authSlice.js";
const store = configureStore({
  reducer: authReducer,
});
export { store };
