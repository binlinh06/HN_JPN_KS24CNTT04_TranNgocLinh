import React, { useMemo } from "react";
const cartItems = [
  { id: 1, name: "San pham A", price: 100000, quantity: 2 },
  { id: 2, name: "San pham B", price: 200000, quantity: 1 },
];
export default function Baitap1() {
  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);
  return (
    <div>
      <h2>Giỏ hàng</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price.toLocaleString()}đ x {item.quantity}
          </li>
        ))}
      </ul>
      <h3>Tổng cộng: {totalPrice.toLocaleString()}đ</h3>
    </div>
  );
}
