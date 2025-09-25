import { configureStore } from "@reduxjs/toolkit";
import student_slice from "./slices/studentSlice";
const store = configureStore({
  reducer: {
    students: student_slice,
  },
});

export default store;
