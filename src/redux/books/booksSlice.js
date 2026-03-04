// import { createSlice } from "@reduxjs/toolkit";

// const booksSlice = createSlice({
//   name: "books",
//   initialState: [],
//   reducers: {
//     addBook: (state, action) => {
//       state.push(action.payload);
//     },
//     deleteBook: (state, action) => {
//       return state.filter((book) => book.id !== action.payload);
//     },
//   },
// });

// export const { addBook, deleteBook } = booksSlice.actions;
// export default booksSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "./booksOperations";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    entities: [], // Тепер збігається з селектором
    isLoading: false,
    error: null,
  },
  reducers: {
    addBook: (state, action) => {
      state.entities.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.entities = state.entities.filter(
        (book) => book.id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.entities = action.payload;
        state.error = null;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
