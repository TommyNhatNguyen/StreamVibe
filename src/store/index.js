import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./reducer/favoritesReducer";
import watchlistReducer from "./reducer/watchlistReducer";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    watchlist: watchlistReducer,
  },
});
