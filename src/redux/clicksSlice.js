import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const clicksSlice = createSlice({
  name: "clicks",
  initialState: { value: 0 },
  reducers: {
    update: (state, action) => {
      state.value += 1;
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
};

// Reducer кліків, але вже пов'язаний з localStorage
export const clicksReducer = persistReducer(persistConfig, clicksSlice.reducer);

export const { update } = clicksSlice.actions;

// Selectors
export const getClicksValue = (state) => state.clicks.value;
