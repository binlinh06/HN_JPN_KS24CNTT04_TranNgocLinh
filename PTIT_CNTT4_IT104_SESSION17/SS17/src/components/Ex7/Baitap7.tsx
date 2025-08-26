import React, { useState } from "react";

export default function Baitap7() {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <label>Thành phố:{city} </label><br/>
      <select value={city} onChange={handleChange}>
        <option value="">-- Chọn thành phố --</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Đà Nẵng">Đà Nẵng</option>
        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
        <option value="Cần Thơ">Cần Thơ</option>
      </select>
    </div>
  );
}
