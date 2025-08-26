import React, { useState } from "react";

export default function Baitap4() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isVisible ? "Ẩn" : "Hiện"}
      </button>

      {isVisible && <h1>Tiêu đề văn bản</h1>}
    </div>
  );
}
