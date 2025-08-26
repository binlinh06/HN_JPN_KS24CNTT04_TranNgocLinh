import React, { useState } from "react";

export default function Baitap2() {
  const [product, setProduct] = useState({
    id: 1,
    name: "Laptop Dell XPS 13",
    price: 25000000,
    quantity: 10
  });

  return (
    <div>
      <h1>Thông tin sản phẩm</h1>
      <p>Id:{product.id}</p>
      <p>Tên sản phẩm: {product.name}</p>
      <p>Price:{product.price}</p>
      <p>Quantity:{product.quantity}</p>

    </div>
  );
}
