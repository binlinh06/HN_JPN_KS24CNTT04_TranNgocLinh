// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../stores/slices/Ex08";
import { useNavigate } from "react-router-dom";

export default function Ex08() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state: any) => state.auth.currentUser);

  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(form));
    if (
      currentUser ||
      (form.email === "a@gmail.com" && form.password === "123456") ||
      (form.email === "b@gmail.com" && form.password === "abcdef")
    ) {
      navigate("/");
    } else {
      alert("Email hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Mật khẩu: </label>
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}
