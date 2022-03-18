import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    loginStart: (state) => {},
    loginSuccess: (state) => {},
    loginFailure: (state) => {},
  },
});

export const { addProduct } = userSlice.actions;
export default userSlice.reducer;
