import React, { useEffect, useState } from "react";
import axios from "axios";

type Student = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};

export default function Ex07() {
  const [students, setStudents] = useState<Student[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState<Student | null>(null);

  // Lấy danh sách sinh viên
  const getAllStudents = async () => {
    try {
      const res = await axios.get("http://localhost:8080/students");
      setStudents(res.data);
    } catch (error) {
      console.error("Lỗi khi fetch danh sách:", error);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  // Hàm xoá sinh viên
  const deleteStudent = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/students/${id}`);
      setOpenModal(false);
      setStudentToDelete(null);
      getAllStudents(); // load lại danh sách
    } catch (error) {
      console.error("Lỗi khi xoá sinh viên:", error);
    }
  };

  return (
    <div className="p-6">
      <div className="bg-blue-900 text-white p-4 rounded-t-md flex justify-between items-center">
        <h2 className="text-xl font-bold">
          Quản lý <span className="text-green-400">sinh viên</span>
        </h2>
        <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
          + Thêm mới sinh viên
        </button>
      </div>

      {/* Bảng danh sách */}
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Tên sinh viên</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Địa chỉ</th>
            <th className="p-2 border">Số điện thoại</th>
            <th className="p-2 border">Lựa chọn</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50">
              <td className="p-2 border">{student.name}</td>
              <td className="p-2 border">{student.email}</td>
              <td className="p-2 border">{student.address}</td>
              <td className="p-2 border">{student.phone}</td>
              <td className="p-2 border flex gap-2">
                {/* Nút sửa */}
                <button className="text-yellow-500 hover:text-yellow-700">
                  ✏️
                </button>
                {/* Nút xoá */}
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => {
                    setStudentToDelete(student);
                    setOpenModal(true);
                  }}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal xác nhận xoá */}
      {openModal && studentToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-md shadow-lg w-[400px]">
            <h3 className="text-lg font-bold mb-4">Xóa sinh viên</h3>
            <p className="mb-6">
              Bạn chắc chắn muốn xóa sinh viên{" "}
              <span className="font-semibold">
                {studentToDelete.student_name} (ID: {studentToDelete.id})
              </span>
              ?
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setOpenModal(false)}
              >
                Hủy
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => deleteStudent(studentToDelete.id)}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
