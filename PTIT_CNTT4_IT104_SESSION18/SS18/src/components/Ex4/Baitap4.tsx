import React, { useState, useCallback } from "react";

export default function Baitap4() {
    const [color,setColor] = useState<string>("")
    const handleChangeColor = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        setColor(e.target.value);
    },[])
  return (
    <div>
      <h2>Màu người dùng chọn:</h2>
      <input type="color" value={color} onChange={handleChangeColor} />

      <h2>Màu hiển thị:</h2>
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: color || "transparent",
          border: "1px solid #000",
        }}
      />
    </div>
  );
}
