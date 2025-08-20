import React, { Component } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
type Props = {
  product: Product;
};

export default class Baitap5_children extends Component<Props> {
  render() {
    const { id, name, price, quantity } = this.props;

    return (
      <div>
        <h3>Thông tin sản phẩm</h3>
        <p>ID: {id}</p>
        <p>Tên sản phẩm: {name}</p>
        <p>Giá: {price} VNĐ</p>
        <p>Số lượng: {quantity}</p>
      </div>
    );
  }
}
