import React, { Component } from "react";
type State = {
  isLoggedIn: boolean;
};
export default class Baitap2 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleChange=()=>{
    this.setState((prevState)=>({
      isLoggedIn : !prevState.isLoggedIn
  }))
  }
  render() {
    return (
      <div>
        <h2>Trạng thái đăng nhập</h2>
        <p>
          {this.state.isLoggedIn
            ? "Xin chao,User"
            : "Vui long dang nhap de tiep tuc"}
        </p>
        <button onClick={this.handleChange}>
          {this.state.isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
        </button>
      </div>
    );
  }
}
