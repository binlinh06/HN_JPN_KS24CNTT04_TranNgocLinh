import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  enum Role {
    Admin = "Admin",
    User = "User",
    Manager = "Manager",
  }
  const user = {
    email: "admin@gmail.com",
    password: "12345",
    role: Role.Admin,
  };
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      form.email === user.email &&
      form.password === user.password &&
      form.role === user.role
    ) {
      localStorage.setItem("isLogin", "true");
      localStorage.setItem("role", user.role);
      navigate("/account");
    } else {
      alert("Đăng nhập thất bại!");
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
      <h1>Dang nhap</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Nhập email"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Nhập mật khẩu"
          onChange={handleChange}
        />
        <br />
        <select name="role" onChange={handleChange}>
          <option value="">-- Chọn quyền --</option>
          <option value={Role.Admin}>Admin</option>
          <option value={Role.User}>User</option>
          <option value={Role.Manager}>Manager</option>
        </select>
        <br />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}
