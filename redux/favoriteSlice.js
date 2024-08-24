import { createSlice } from "@reduxjs/toolkit";

export const setFavoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    setFavorite: (state, action) => {
      const exists = state.find(
        (item) => item?.idArticles === action.payload?.idArticles
      );

      if (!exists) {
        return [...state, action.payload];
      }

      return state;
    },
    removeFavorite: (state, action) => {
      return state.filter(
        (item) => item?.idArticles !== action.payload?.idArticles
      );
    },
    clearFavorites: () => {
      return [];
    },
  },
});

export const { setFavorite, removeFavorite, clearFavorites } =
  setFavoriteSlice.actions;

export default setFavoriteSlice.reducer;
