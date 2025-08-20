import React, { Component } from "react";
import Baitap5_children from "./Baitap5_children";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type State = {
  product: Product;
};

export default class Baitap5_parent extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      product: {
        id: 101,
        name: "Laptop Asus",
        price: 15000000,
        quantity: 10,
      },
    };
  }

  render() {
    const { id, name, price, quantity } = this.state.product;

    return (
      <div>
        <Baitap5_children
          id={id}
          name={name}
          price={price}
          quantity={quantity}
        />
      </div>
    );
  }
}
