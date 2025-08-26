import React, { useState } from "react";

export default function Checkbox() {
  const options = ["Đi chơi", "Code", "Nghe nhạc", "Đọc sách"];
  const [selected, setSelected] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      // thêm giá trị vào mảng
      setSelected([...selected, value]);
    } else {
      // bỏ giá trị ra khỏi mảng
      setSelected(selected.filter((item) => item !== value));
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <p>
        Sở thích:[
        {selected.map((s, i) => `"${s}"${i < selected.length - 1 ? "," : ""}`)}]
      </p>
      {options.map((opt, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={opt}
            onChange={handleChange}
            checked={selected.includes(opt)}
          />
          <label>{opt}</label>
        </div>
      ))}
    </div>
  );
}
