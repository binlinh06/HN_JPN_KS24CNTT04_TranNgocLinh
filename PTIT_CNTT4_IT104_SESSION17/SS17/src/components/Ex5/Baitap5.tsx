import React, { useState } from "react";

export default function Baitap5() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập nội dung"
        value={text}
        onChange={handleChange}
        style={{ padding: "5px", width: "200px" }}
      />
      <h2>{text}</h2>
    </div>
  );
}
