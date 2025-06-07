import AddToCart from "@/components/products/AddToCart";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;

      const existingProduct = state.products.find(
        (item) => item.product.id === newProduct.id
      );

      if (existingProduct) {
        state.products = state.products.map((item) => {
          if (item.product.id === newProduct.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        state.products = [
          ...state.products,
          { product: newProduct, quantity: 1, totalPrice: 0 },
        ];
      }

      //for total price

      state.totalPrice = state.products.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
    },

    removefromcart: (state, action) => {
      const productToRemove = action.payload;
      state.products = state.products.filter(
        (item) => item.product.id !== productToRemove.id
      );
      // Recalculate total price
      state.totalPrice = state.products.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
    },
    increaseQuantity: (state, action) => {
      const newProduct = action.payload;
      let updated = false;

      state.products = state.products.map((item) => {
        if (item.product.id === newProduct.id) {
          const maxQuantityForONeLakhs = item.product.price > 100000 ? 4 : 15;
          if (item.quantity < maxQuantityForONeLakhs) {
            updated = true;
            return { ...item, quantity: item.quantity + 1 };
          }
        }
        return item;
      });

      if (updated) {
        state.totalPrice += newProduct.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const newProduct = action.payload;
      state.products = state.products.map((item) => {
        if (item.product.id === newProduct.id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      state.totalPrice -= newProduct.price;
    },
  },
});
export const { addToCart, removefromcart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
