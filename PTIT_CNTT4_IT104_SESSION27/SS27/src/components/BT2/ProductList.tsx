import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { products } from "./Data";

export default function ProductList() {
  const [product, setProduct] = useState<any>(products);
  const navigate = useNavigate();
  return (
    <div className="flex-col">
      {product.map((item) => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            <button onClick={() => navigate(`/products/${item.id}`)}>Xem chi tiết</button>
          </td>
        </tr>
      ))}
    </div>
  );
}
