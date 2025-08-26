import React, { useState } from "react";

export default function Baitap3() {
  const [color, setColor] = useState("black");

  const handleChangeColor = () => {
    setColor(color === "black" ? "red" : "black");
  };

  return (
    <div>
      <h1 style={{ color: color }}>Tiêu đề văn bản</h1>
      <button onClick={handleChangeColor}>Thay đổi màu</button>
    </div>
  );
}
