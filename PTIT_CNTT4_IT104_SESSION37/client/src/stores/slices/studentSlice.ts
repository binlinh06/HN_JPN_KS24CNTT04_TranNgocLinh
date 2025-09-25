import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_GETALL_STUDENT } from "../../api/api";
import type { Student } from "../../features/students/types";

// HÀM LẤY TẤT CẢ SINH VIÊN
export const getAllStudent = createAsyncThunk("getAllStudent", async () => {
  const res = await axios.get(API_GETALL_STUDENT);
  return res.data;
});

// HÀM THÊM MỚI SINH VIÊN
export const addStudent = createAsyncThunk(
  "addStudent",
  async (new_student: Student) => {
    const response = await axios.post(
      "http://localhost:3000/students",
      new_student
    );
    return response.data;
  }
);
export const deleteStudent = createAsyncThunk(
  "deleteStudent",
  async (id: string) => {
    await axios.delete(`http://localhost:3000/students/${id}`);
    return id; // trả về id để xoá trong store
  }
);
export const updateStudent = createAsyncThunk(
  "students/update",
  async (student: Student) => {
    const res = await axios.put(
      `http://localhost:3000/students/${student.id}`,
      student
    );
    return res.data;
  }
);
const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [] as Student[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET ALL
      .addCase(getAllStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(getAllStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Có lỗi xảy ra";
      })

      // ADD
      .addCase(addStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students.push(action.payload);
      })
      .addCase(addStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Thêm sinh viên thất bại";
      })
      // DELETE
      .addCase(deleteStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students = state.students.filter((s) => s.id !== action.payload);
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Xóa sinh viên thất bại";
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        const idx = state.students.findIndex((s) => s.id === action.payload.id);
        if (idx !== -1) {
          state.students[idx] = action.payload;
        }
      });
  },
});

export default studentSlice.reducer;
