import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    updateProduct: (state, action) => {
      state.products = state.products.map((item, index) => {
        if (item._id !== action.payload._id) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity + action.payload.quantity,
        };
      });
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {},
    clearCart: (state, action) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, updateProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
