import React, { useEffect } from 'react'
import axios from 'axios'

export default function Ex04() {
  const getAllStudent = async () => {
    try {
      const res = await axios.get("http://localhost:8080/student")
      console.log("Danh sách sinh viên:", res.data)
    } catch (error) {
      console.error("Không thể lấy dữ liệu:", error)
    }
  }

  useEffect(() => {
    getAllStudent()
  }, [])

  return (
    <div>
      <h1>Danh sách sinh viên</h1>
      <p>Mở console để xem dữ liệu.</p>
    </div>
  )
}
