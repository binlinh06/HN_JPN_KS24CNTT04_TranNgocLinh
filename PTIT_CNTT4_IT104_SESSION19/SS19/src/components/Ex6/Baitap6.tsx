import React, { useState, useEffect } from "react";

export default function Baitap6() {
  const [keyPressed, setkKeyPressed] = useState<string | null>(null);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setkKeyPressed(e.key.toUpperCase());
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  },[]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <h3>Phím bạn vừa nhấn:</h3>
      <div
        style={{
          border: "2px dashed #555",
          borderRadius: "8px",
          padding: "30px 60px",
          marginTop: "20px",
          fontSize: "48px",
          fontWeight: "bold",
          backgroundColor: "#f9f9f9",
        }}
      >
        {keyPressed ? `[ ${keyPressed} ]` : "Chưa nhấn phím nào"}
      </div>
    </div>
  );
}
