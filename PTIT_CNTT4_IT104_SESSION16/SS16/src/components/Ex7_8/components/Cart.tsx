import React, { Component } from "react";

type Props = {
  cart: {
    id: number;
    name: string;
    price: number;
    img: string;
    quantity: number;
  }[];
  onUpdateQuantity: (id: number, amount: number) => void;
  onRemove: (id: number) => void;
};

export default class Cart extends Component<Props> {
  render() {
    const { cart, onUpdateQuantity, onRemove } = this.props;
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
      <div className="cart">
        <h2>Cart</h2>
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.name} />
            <span>{item.name}</span>
            <button onClick={() => onUpdateQuantity(item.id, +1)}>+</button>
            <span>{item.quantity}</span>
            <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
            <button onClick={() => onRemove(item.id)}>🗑</button>
          </div>
        ))}
        <h3>Tổng tiền: {total.toLocaleString()} đ</h3>
      </div>
    );
  }
}
