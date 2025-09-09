import React from "react";
import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
  { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" },
];

export default function ListUser() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {users.map((user) => (
        <div
          key={user.id}
          style={{ border: "1px solid black", padding: "10px", width: "200px" }}
        >
          <p>Id: {user.id}</p>
          <p>UserName: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <Link to={`/users/${user.id}`}>
            <button>Xem chi tiết</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
