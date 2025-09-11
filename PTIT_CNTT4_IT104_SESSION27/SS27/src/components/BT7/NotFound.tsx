import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 - Trang bạn tìm không tồn tại</h1>
      <button onClick={() => navigate("/")}>Về trang chủ</button>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
}
