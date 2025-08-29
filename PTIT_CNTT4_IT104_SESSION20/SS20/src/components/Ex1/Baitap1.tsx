import React, { useState } from "react";

export default function Baitap1() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <h3>Kiểm tra độ dài chuỗi nhập vào</h3>
      <input
        type="text"
        placeholder="Nhap vao day"
        onChange={handleChange}
        value={inputValue}
      />
      {inputValue.length > 5 && (
        <div
          style={{
            marginTop: "12px",
            padding: "10px",
            background: "#f8d7da",
            color: "#721c24",
            border: "1px solid #f5c6cb",
            borderRadius: "4px",
          }}
        >
          Chuỗi nhập vào dài hơn 5 ký tự!
        </div>
      )}
    </div>
  );
}
