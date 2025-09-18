import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Auth.css";

export default function Login() {
  const registeredUser = useSelector((state: any) => state.auth.registeredUser);
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => {
    if (registeredUser) {
      setForm({
        email: registeredUser.email,
        password: registeredUser.password,
      });
    }
  }, [registeredUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Đăng nhập với email: ${form.email}, mật khẩu: ${form.password}`);
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
