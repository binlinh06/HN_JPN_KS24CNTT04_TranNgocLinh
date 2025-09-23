import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: number;
  userName: string;
  email: string;
  password: string;
};

type AuthState = {
  currentUser: User | null;
  users: User[];
};

const initialState: AuthState = {
  currentUser: null,
  users: [
    { id: 1, userName: "Nguyen Van A", email: "a@gmail.com", password: "123456" },
    { id: 2, userName: "Nguyen Van B", email: "b@gmail.com", password: "abcdef" },
  ],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        state.currentUser = user;
      } else {
        state.currentUser = null;
      }
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
