import React, { Component } from "react";
type State = {
  email: string;
  password: string;
  message: string;
};
export default class Baitap8 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ message: "Email và Mật khẩu không được để trống" });
      return;
    }
const savedUser = localStorage.getItem("user");
if (savedUser) {
  const parsedUser = JSON.parse(savedUser);
  if (parsedUser.email === email && parsedUser.password === password) {
    this.setState({ message: "Đăng nhập thành công" });
    return;
  }
}
this.setState({ message: "Đăng nhập thất bại" });

  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h2>Đăng nhập</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Mật khẩu:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Đăng nhập</button>
        </form>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
