import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Auth.css";

export default function Ex08() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.email && form.password) {
      dispatch({ type: "LOGIN", payload: { email: form.email } });
      alert("Đăng nhập thành công!");
    }
  };

  return (
    <div className="auth-container">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Nhập email..."
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Nhập mật khẩu..."
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}
