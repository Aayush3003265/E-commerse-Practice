const { configureStore } = require("@reduxjs/toolkit");
import persistReducer from "redux-persist/es/persistReducer";
import authReducer from "./auth/authSlice.js";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
const persistConfig = {
  key: "ebaazar",
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);
export { store, persistor };
