import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./reducer/favoritesReducer";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
