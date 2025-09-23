import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  id: number;
  name: string;
  isFavorite: boolean;
};

export type FavoriteState = {
  users: User[];
};

const initialState: FavoriteState = {
  users: [
    { id: 1, name: "Nguyễn Văn A", isFavorite: true },
    { id: 2, name: "Nguyễn Văn B", isFavorite: false },
    { id: 3, name: "Nguyễn Văn C", isFavorite: true },
    { id: 4, name: "Nguyễn Văn D", isFavorite: true },
  ],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const user = state.users.find((u) => u.id === action.payload);
      if (user) {
        user.isFavorite = !user.isFavorite;
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
