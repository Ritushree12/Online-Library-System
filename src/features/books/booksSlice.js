import { createSlice } from "@reduxjs/toolkit";
import dummyBooks from "./dummyBooks";

// Redux slice holds the books list and actions (add, etc.)
const booksSlice = createSlice({
  name: "books",
  initialState: dummyBooks,
  reducers: {
    addBook: (state, action) => {
      // Add new book at the TOP
      state.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
