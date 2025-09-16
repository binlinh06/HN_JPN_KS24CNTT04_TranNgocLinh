import React, { useEffect } from "react";

export default function Ex02() {
  const getAllProduct = async () => {
    try {
      const res = await fetch("http://localhost:8080/product");
      if (!res.ok) throw new Error("Lỗi khi gọi API");
      const data = await res.json();
      console.log("Danh sách sản phẩm:", data);
    } catch (error) {
      console.error("Không thể lấy dữ liệu:", error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <p>Mở console để xem dữ liệu.</p>
    </div>
  );
}
