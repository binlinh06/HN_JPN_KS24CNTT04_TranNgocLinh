import { createSlice } from "@reduxjs/toolkit";

interface RandomState {
  numbers: number[];
}

const initialState: RandomState = {
  numbers: [],
};

const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    generateRandom: (state) => {
      state.numbers = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * 10) + 1
      );
    },
  },
});

export const { generateRandom } = randomSlice.actions;
export default randomSlice.reducer;
