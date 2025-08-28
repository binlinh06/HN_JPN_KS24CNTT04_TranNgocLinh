import React, { useRef } from "react";

export default function Baitap7() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToContent = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d6efd",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          🧭 Cuộn tới nội dung
        </h1>
        <button
          onClick={scrollToContent}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "2px solid #fff",
            background: "#fff",
            color: "#0d6efd",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Đi tới phần nội dung
        </button>
      </div>

      
      <div style={{ padding: "40px", background: "#f8f9fa", fontSize: "18px" }}>
        <p>Đây là nội dung giả lập để tạo khoảng cách cho trang...</p>
        <p>
          Bạn có thể thêm nhiều đoạn như thế này để tăng chiều dài trang và có
          thể kiểm tra tính năng cuộn.
        </p>
        <p>Cuộn trang sẽ mượt mà hơn khi có nhiều nội dung.</p>
      </div>

      <div
        ref={sectionRef}
        style={{
          padding: "60px",
          background: "#e9ecef",
          textAlign: "center",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        🎯 Đây là phần nội dung mục tiêu!
      </div>
    </div>
  );
}
