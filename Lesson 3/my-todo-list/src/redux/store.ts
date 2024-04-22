import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
