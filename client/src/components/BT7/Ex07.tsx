import React, { useEffect, useState } from "react"
import axios from "axios"

type Student = {
  id: number
  name: string
  email: string
  address: string
  phone: string
}

export default function Ex07() {
  const [students, setStudents] = useState<Student[]>([])

  // Lấy danh sách sinh viên
  const getAllStudents = async () => {
    try {
      const res = await axios.get("http://localhost:8080/students")
      setStudents(res.data)
    } catch (error) {
      console.error("Lỗi khi fetch sinh viên:", error)
    }
  }

  useEffect(() => {
    getAllStudents()
  }, [])

  return (
    <div className="max-w-5xl mx-auto mt-10 border rounded shadow">
      <div className="bg-blue-900 text-white p-4 flex justify-between items-center rounded-t">
        <h2 className="text-xl font-semibold">
          Quản lý <span className="font-bold">sinh viên</span>
        </h2>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          + Thêm mới sinh viên
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">
              <input type="checkbox" />
            </th>
            <th className="p-3 border">Tên sinh viên</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Địa chỉ</th>
            <th className="p-3 border">Số điện thoại</th>
            <th className="p-3 border">Lựa chọn</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <tr key={stu.id} className="hover:bg-gray-50">
              <td className="p-3 border">
                <input type="checkbox" />
              </td>
              <td className="p-3 border">{stu.name}</td>
              <td className="p-3 border">{stu.email}</td>
              <td className="p-3 border">{stu.address}</td>
              <td className="p-3 border">{stu.phone}</td>
              <td className="p-3 border flex gap-2">
                <button className="text-yellow-500 hover:text-yellow-600">
                  ✏️
                </button>
                <button className="text-red-500 hover:text-red-600">
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center p-3 text-sm text-gray-600">
        <span>
          Hiển thị <b>{students.length}</b> / {students.length} bản ghi
        </span>
        <div className="flex gap-2">
          <button className="px-2 py-1 border rounded">Trước</button>
          <button className="px-2 py-1 border rounded bg-blue-500 text-white">
            1
          </button>
          <button className="px-2 py-1 border rounded">2</button>
          <button className="px-2 py-1 border rounded">3</button>
          <button className="px-2 py-1 border rounded">Sau</button>
        </div>
      </div>
    </div>
  )
}
