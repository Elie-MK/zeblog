import { configureStore } from "@reduxjs/toolkit";
import setFavoriteReducer from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    setFavorite: setFavoriteReducer,
  },
});
