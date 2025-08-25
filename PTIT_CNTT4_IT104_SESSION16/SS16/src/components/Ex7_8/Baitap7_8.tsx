import React, { Component } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  stock: number; // thêm số lượng trong kho
};

type CartItem = Product & { quantity: number };

type State = {
  cart: CartItem[];
  showCart: boolean;
};

export default class Baitap7_8 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cart: [],
      showCart: false,
    };
  }

  componentDidMount() {
    // load giỏ hàng từ localStorage khi mở trang
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      this.setState({ cart: JSON.parse(savedCart) });
    }
  }

  componentDidUpdate(_: {}, prevState: State) {
    // lưu giỏ hàng vào localStorage khi có thay đổi
    if (prevState.cart !== this.state.cart) {
      localStorage.setItem("cart", JSON.stringify(this.state.cart));
    }
  }

handleAddToCart = (product: Product) => {
  this.setState((prevState): Pick<State, "cart"> => {
    const existing = prevState.cart.find((item) => item.id === product.id);
    if (existing) {
      // kiểm tra tồn kho
      if (existing.quantity < product.stock) {
        return {
          cart: prevState.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        alert("Số lượng sản phẩm trong kho không đủ");
        return { cart: prevState.cart }; // vẫn phải trả về cart
      }
    }
    return { cart: [...prevState.cart, { ...product, quantity: 1 }] };
  });
};


  handleUpdateQuantity = (id: number, amount: number) => {
    this.setState((prevState) => ({
      cart: prevState.cart
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + amount;
            if (newQuantity > item.stock) {
              alert("Số lượng sản phẩm trong kho không đủ");
              return item;
            }
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0),
    }));
  };

  handleRemove = (id: number) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((item) => item.id !== id),
    }));
  };

  toggleCart = () => {
    this.setState((prevState) => ({ showCart: !prevState.showCart }));
  };

  render() {
    const { cart, showCart } = this.state;
    return (
      <div>
        <nav className="navbar">
          <div>
            <span>Trang chủ</span>
            <span>Danh sách sản phẩm</span>
          </div>

          <button className="cart-icon" onClick={this.toggleCart}>
            🛒 <span className="badge">{cart.length}</span>
          </button>
        </nav>

        <div className="container">
          <ProductList onAddToCart={this.handleAddToCart} />

          {showCart && (
            <Cart
              cart={cart}
              onUpdateQuantity={this.handleUpdateQuantity}
              onRemove={this.handleRemove}
            />
          )}
        </div>
      </div>
    );
  }
}
