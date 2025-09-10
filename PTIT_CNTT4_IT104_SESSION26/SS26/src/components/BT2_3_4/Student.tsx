import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Student() {
  const [studentName, setStudentName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const nameFromUrl = searchParams.get("studentName");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentName(e.target.value);
  };

  const handleClick = () => {
    setSearchParams({
      studentName: studentName, 
    });
  };

  return (
    <div>
      <h2>HỌC SINH</h2>
      <input
        type="text"
        placeholder="Nhập tên sinh viên"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Tìm kiếm</button>

      <p>Kết quả trên URL: {nameFromUrl}</p>
    </div>
  );
}
