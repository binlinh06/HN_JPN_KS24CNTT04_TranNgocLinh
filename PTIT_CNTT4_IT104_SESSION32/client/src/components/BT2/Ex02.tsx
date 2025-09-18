import React from "react";
import { useSelector } from "react-redux";

export default function Ex02() {
  const result = useSelector((state: any) => state.ex02.student);

  return (
    <div>
      <table border={1} cellPadding={10} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item: any, index: number) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.userName}</td>
              <td>{item.gender}</td>
              <td>{item.dateBirth}</td>
              <td>{item.address}</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
