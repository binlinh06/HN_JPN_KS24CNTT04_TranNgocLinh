import React, { useEffect } from 'react'
import axios from 'axios'

export default function Ex05() {
  const getStudentById = async (id) => {
    try {
      const res = await axios.get(`http://localhost:8080/student/${id}`)
      if (res.data) {
        console.log("Chi tiết sinh viên:", res.data)
      } else {
        console.log("Không tìm thấy bản ghi")
      }
    } catch (error) {
      console.error("Không tìm thấy bản ghi:", error.message)
    }
  }

  useEffect(() => {
    getStudentById(3)
  }, [])

  return (
    <div>
      <h1>Chi tiết sinh viên</h1>
      <p>Mở console để xem dữ liệu.</p>
    </div>
  )
}
