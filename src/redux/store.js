import { configureStore } from "@reduxjs/toolkit";

// import { createAction, createReducer } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import myValueSlice from "../redux/myValues/myValueSlice";
import userSlice from "../redux/userSlice";
// import { clicksSlice } from "./clicksSlice";
import { clicksReducer } from "./clicksSlice";

// export const increment = createAction("myValue/increment");
// export const decrement = createAction("myValue/decrement");

// const myReducer = createReducer(100, (builder) => {
//   builder
//     .addCase(increment, (state, action) => state + action.payload)
//     .addCase(decrement, (state, action) => state - action.payload);
// });

// export const store = configureStore({
//   reducer: {
//     myValue: myReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    myValue: myValueSlice,
    user: userSlice,
    // clicks: clicksSlice.reducer,
    // clicks: persistedClicksReducer,
    clicks: clicksReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
