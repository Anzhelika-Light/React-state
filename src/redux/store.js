import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("myValue/increment");
export const decrement = createAction("myValue/decrement");

const myReducer = createReducer(100, (builder) => {
  builder
    .addCase("increment", (state, action) => state + action.payload)
    .addCase("decrement", (state, action) => state - action.payload);
});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
  },
});
