import React, { Component } from "react";

type Product = {
  productCode: string;
  productName: string;
  price: number;
  quantity: number;
};

type InitialState = {
  products: Product;
};

export default class Baitap5 extends Component<{}, InitialState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      products: {
        productCode: "SP001",
        productName: "Cam da xanh",
        price: 20000,
        quantity: 10,
      },
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", this.state.products);
    this.setState({
      products: {
        productCode: "",
        productName: "",
        price: 0,
        quantity: 0,
      },
    });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      products: {
        ...this.state.products,
        [name]: name === "price" || name === "quantity" ? Number(value) : value,
      },
    });
  };

  render() {
    return (
      <div>
        <h3>Thêm sản phẩm mới</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Mã sản phẩm</label>
          <br />
          <input
            type="text"
            name="productCode"
            onChange={this.handleChange}
            value={this.state.products.productCode}
          />
          <br />

          <label>Tên sản phẩm</label>
          <br />
          <input
            type="text"
            name="productName"
            onChange={this.handleChange}
            value={this.state.products.productName}
          />
          <br />

          <label>Giá</label>
          <br />
          <input
            type="number"
            name="price"
            onChange={this.handleChange}
            value={this.state.products.price}
          />
          <br />

          <label>Số lượng</label>
          <br />
          <input
            type="number"
            max={10}
            min={1}
            name="quantity"
            onChange={this.handleChange}
            value={this.state.products.quantity}
          />
          <br />

          <button type="submit">Thêm</button>
        </form>
      </div>
    );
  }
}
