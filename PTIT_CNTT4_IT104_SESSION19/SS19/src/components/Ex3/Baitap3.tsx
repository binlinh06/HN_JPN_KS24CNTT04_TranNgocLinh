import React, { useState, useRef, useEffect } from "react";

export default function Baitap3() {
  const [inputValue , setInputValue] = useState("");
  const renderCount = useRef(0);
  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputValue(e.target.value)
    renderCount.current++
  }
  return (
    <div>
      <h2> Component Render Counter</h2>
      <label>
        Input:
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      <p>Component đã render: <b>{renderCount.current}</b> lần</p>
    </div>
  )
}
