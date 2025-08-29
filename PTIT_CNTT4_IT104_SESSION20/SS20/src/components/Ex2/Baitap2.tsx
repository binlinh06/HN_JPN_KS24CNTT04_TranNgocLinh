import React, { useState } from "react";

export default function Baitap2() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <div>
      <h3>Thong tin nguoi dung</h3>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhap ten"
          onChange={handleChange}
          value={user.name}
          name="name"
        />
        <br />
        <input
          type="text"
          placeholder="Nhap email"
          onChange={handleChange}
          value={user.email}
          name="email"
        />
        <br />
        <button type="submit">Gui</button>
      </form>
      {submitted && (
        <div>
          <p>
            <strong>Tên:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      )}
    </div>
  );
}
