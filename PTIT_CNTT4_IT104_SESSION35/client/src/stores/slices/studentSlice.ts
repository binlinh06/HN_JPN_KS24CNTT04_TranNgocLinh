import { createSlice } from "@reduxjs/toolkit";
import type { initialStudentState } from "../../utils/type";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [
      {
        id: 1,
        name: "Linh",
      },
      {
        id: 2,
        name: "Linh",
      },
      {
        id: 3,
        name: "Linh",
      },
    ],
  },
  reducers: {
    addStudent: (state: initialStudentState, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state: initialStudentState, action) => {
      // state.students.delete(action.payload);
    },
  },
});
export const { deleteStudent } = studentSlice.actions;
export const { addStudent } = studentSlice.actions;
export default studentSlice.reducer;
