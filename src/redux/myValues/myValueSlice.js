import { createSlice } from "@reduxjs/toolkit";

const initialState = 100;

const myValueSlice = createSlice({
  name: "myValue",
  initialState,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

export const { increment, decrement } = myValueSlice.actions;
export default myValueSlice.reducer;
