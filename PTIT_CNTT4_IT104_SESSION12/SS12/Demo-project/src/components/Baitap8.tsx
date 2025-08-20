import React from "react";

interface User {
  id: number;
  name: string;
  dob: string;
  gender: string;
  address: string;
}

export default function Baitap8() {
  const users: User[] = [
    { id: 1, name: "Malcolm Lockyer", dob: "21/03/1961", gender: "Nam", address: "New york" },
    { id: 2, name: "Maria", dob: "11/02/1990", gender: "Nữ", address: "London" },
  ];

  const handleEdit = (id: number) => {
    alert(`Sửa người dùng có id = ${id}`);
  };

  const handleDelete = (id: number) => {
    alert(`Xóa người dùng có id = ${id}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
          backgroundColor: "#fff",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <thead style={{ backgroundColor: "#f9fcff" }}>
          <tr>
            <th style={thStyle}>STT</th>
            <th style={thStyle}>Họ và tên</th>
            <th style={thStyle}>Ngày sinh</th>
            <th style={thStyle}>Giới tính</th>
            <th style={thStyle}>Địa chỉ</th>
            <th style={thStyle}>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} style={{ borderTop: "1px solid #eee" }}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.dob}</td>
              <td style={tdStyle}>{user.gender}</td>
              <td style={tdStyle}>{user.address}</td>
              <td style={tdStyle}>
                <button style={editBtn} onClick={() => handleEdit(user.id)}>Sửa</button>
                <button style={deleteBtn} onClick={() => handleDelete(user.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  padding: "12px",
  fontWeight: 600,
  color: "#6b7280",
};

const tdStyle: React.CSSProperties = {
  padding: "12px",
};

const editBtn: React.CSSProperties = {
  marginRight: "10px",
  padding: "6px 12px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  backgroundColor: "#f9fafb",
  cursor: "pointer",
};

const deleteBtn: React.CSSProperties = {
  padding: "6px 12px",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "#ef4444",
  color: "white",
  cursor: "pointer",
};
