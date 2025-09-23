import { createSlice } from "@reduxjs/toolkit";

type ViewModeState = {
  mode: "list" | "grid";
};

const initialState: ViewModeState = {
  mode: "list",
};

const viewModeSlice = createSlice({
  name: "viewMode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "list" ? "grid" : "list";
    },
  },
});

export const { toggleMode } = viewModeSlice.actions;
export default viewModeSlice.reducer;
