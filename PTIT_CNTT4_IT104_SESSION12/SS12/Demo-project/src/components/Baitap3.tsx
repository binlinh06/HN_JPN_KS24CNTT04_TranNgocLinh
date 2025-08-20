import React from 'react'

export default function Baitap3() {
    let list = {
        name:"Nguyễn Văn A",
        male:"Nam",
        age:"06/03/2024",
        email:"nva@gmail.com",
        address:"Thanh Xuân , Hà Nội"
    }
  return (
    <div>
      <h4>Thông tin cá nhân</h4>
      <ul>
        <li>Họ và tên: {list.name}</li>
        <li>Giới tính: {list.male}</li>
        <li>Ngày sinh: {list.age}</li>
        <li>Email: {list.email}</li>
        <li>Địa chỉ: {list.address}</li>
      </ul>
    </div>
  )
}
