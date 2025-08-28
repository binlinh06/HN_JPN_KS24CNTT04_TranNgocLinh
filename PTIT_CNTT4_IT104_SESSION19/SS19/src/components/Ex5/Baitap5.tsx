import React, { useState } from "react";

export default function Baitap5() {
  const quotes:string[] = [
    "Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
    "Kiến tha lâu đầy tổ.",
    "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.",
  ]
  const [quote, setQuotes] = useState(quotes[0]);
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuotes(quotes[randomIndex]);
  };
  return (
    <div>
      <h3>Câu nói truyền cảm hứng hôm nay:</h3>
      <p>"{quote}"</p>
      <button
        onClick={getRandomQuote}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Lấy câu nói mới
      </button>
    </div>
  );
}
