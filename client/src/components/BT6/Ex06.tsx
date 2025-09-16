import React from 'react'
import axios from 'axios'

export default function Ex04() {
  const createStudent = async () => {
    const student = {
      id: Date.now(),       
      name: "Nguyễn Văn A",
      age: 20,
      email: "vana@example.com",
      address: "Hà Nội",
    }

    try {
      const res = await axios.post("http://localhost:8080/student", student)
      console.log("Kết quả trả về từ server:", res.data)
    } catch (error) {
      console.error("Lỗi khi thêm sinh viên:", error)
    }
  }

  return (
    <div>
      <h2>Thêm mới sinh viên</h2>
      <button onClick={createStudent}>Thêm sinh viên</button>
    </div>
  )
}
