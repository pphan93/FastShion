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
      // state.quantity += 1;
      // state.products.push(action.payload);
      // state.total += action.payload.price * action.payload.quantity;

      const existingCartItemIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );
      let updatedProducts = [...state.products];

      if (existingCartItemIndex !== -1) {
        updatedProducts[existingCartItemIndex].quantity =
          updatedProducts[existingCartItemIndex].quantity +
          action.payload.quantity;

        if (
          !updatedProducts[existingCartItemIndex].size.includes(
            action.payload.size[0]
          )
        ) {
          updatedProducts[existingCartItemIndex].size.push(
            action.payload.size[0]
          );
        }

        if (
          !updatedProducts[existingCartItemIndex].color.includes(
            action.payload.color[0]
          )
        ) {
          updatedProducts[existingCartItemIndex].color.push(
            action.payload.color[0]
          );
        }

        state.total += action.payload.price * action.payload.quantity;
      } else {
        //add item into new array
        state.products.push(action.payload);
        state.quantity += 1;
        state.total += action.payload.price * action.payload.quantity;
      }
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
    removeProduct: (state, action) => {
      const currentItem = state.products.find(
        (item) => item._id === action.payload._id
      );

      state.total = state.total - currentItem.quantity * currentItem.price;
      state.products = state.products.filter(
        (item) => item._id !== action.payload._id
      );
      state.quantity = state.quantity - 1;
    },
    clearCart: (state, action) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
    updateQuanity: (state, action) => {
      const condition = action.payload.condition;
      const id = action.payload._id;
      const existingCartItemIndex = state.products.findIndex(
        (item) => item._id === id
      );

      console.log("index: " + existingCartItemIndex);

      if (condition === "+") {
        state.products[existingCartItemIndex].quantity =
          state.products[existingCartItemIndex].quantity + 1;

        state.total = state.total + state.products[existingCartItemIndex].price;
      } else {
        console.log("----");
        if (state.products[existingCartItemIndex].quantity <= 1) {
          console.log("less than");
          state.total =
            state.total - state.products[existingCartItemIndex].price;

          state.products = state.products.filter(
            (item) => item._id !== action.payload._id
          );
          state.quantity = state.quantity - 1;
        } else {
          state.products[existingCartItemIndex].quantity =
            state.products[existingCartItemIndex].quantity - 1;

          state.total =
            state.total - state.products[existingCartItemIndex].price;
        }
      }
    },
  },
});

export const {
  addProduct,
  updateProduct,
  clearCart,
  removeProduct,
  updateQuanity,
} = cartSlice.actions;
export default cartSlice.reducer;
