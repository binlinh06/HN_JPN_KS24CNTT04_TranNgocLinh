import React, { useState, useEffect } from "react";
export default function Baitap4() {
  const [data, setData] = useState({ name: "", email: "" });
  const [error, setError] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value === "") {
      setError({ ...error, [name]: `${name} ko dc bo trong` });
    } else {
      setError({ ...error, [name]: "" });
    }
    // if (name === "email" && (value.includes("@") || value.indexOf("@") != 0)) {
    //   setError({ ...error, email: '' });
    // } else {
    //   setError({ ...error, email: `Email ko dung dinh dang` });
    // }
    setData({ ...data, [name]: value });
  };
  return (
    <div>
      <h3>Đăng ký thông tin</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Họ tên</label> <br />
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <p style={{ color: "red", fontSize: "14px" }}>{error.name}</p>
        <label htmlFor="">Email</label> <br />
        <input type="text" name="email" onChange={handleChange} />
        <br />
        <p style={{ color: "red", fontSize: "14px" }}>{error.email}</p>
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
}
