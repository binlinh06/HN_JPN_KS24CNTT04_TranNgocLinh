import React from 'react'

export default function Baitap5() {
    // Khai báo đối tượng

const user = {
    firstName: "Nguyễn Văn",
    lastName: "Nam",

  };
    function formatName(user: { firstName: string; lastName: string }): string {
    return `${user.firstName} ${user.lastName}`;
  }
formatName(user)
  return (
    <div>
      <h3>Thông tin người dùng</h3>
      <p>Họ và tên: {formatName(user)}</p>
    </div>
  )
}
