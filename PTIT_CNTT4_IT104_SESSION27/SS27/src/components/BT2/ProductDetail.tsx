import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { products } from "./Data";
export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === Number(id));
  return (
    <div style={{ padding: "20px" }}>
      <h2>Chi tiết sản phẩm</h2>
      <p>
        <b>Tên:</b> {product.name}
      </p>
      <p>
        <b>Giá:</b> {product.price}
      </p>
      <p>
        <b>Mô tả:</b> {product.des}
      </p>
      <button onClick={() => navigate(-1)}>Quay lại danh sach san pham</button>
    </div>
  );
}
