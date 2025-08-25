import React, { Component } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
};

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export default class ProductItem extends Component<Props> {
  render() {
    const { product, onAddToCart } = this.props;
    return (
      <div className="card">
        <img src={product.img} alt={product.name} className="card-img" />
        <h3 className="card-title">{product.name}</h3>
        <p className="card-price">
          {product.price.toLocaleString("vi-VN")} đ
        </p>
        <button
          className="add-btn"
          onClick={() => onAddToCart(product)}
        >
          🛒 Thêm vào giỏ hàng
        </button>
      </div>
    );
  }
}
