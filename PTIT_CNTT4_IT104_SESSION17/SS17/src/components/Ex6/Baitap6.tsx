import React, { useState } from "react";

export default function Baitap6() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Nhập nội dung"
        value={text}
        onChange={handleChange}
      />
      <p>Số ký tự: {text.length}</p>
    </div>
  );
}
