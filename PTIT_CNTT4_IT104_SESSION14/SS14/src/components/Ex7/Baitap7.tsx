import React, { Component } from "react";
type State = {
  name: string;
  email: string;
  password: string;
  address: string;
  message: string;
};
export default class Baitap7 extends Component<{},State> {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      address: "",
      message: "",
    };
    this.nameRef = React.createRef();
  }

  componentDidMount() {
    this.nameRef.current.focus();
  }

  handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, address } = this.state;

    // Validate rỗng
    if (!name || !email || !password) {
      this.setState({ message: "Vui lòng nhập đầy đủ thông tin bắt buộc." });
      return;
    }

    // Lấy danh sách user từ localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check trùng email
    const isDuplicate = users.some((user) => user.email === email);
    if (isDuplicate) {
      this.setState({ message: "Email đã tồn tại, vui lòng nhập email khác." });
      return;
    }

    // Tạo user mới
    const newUser = { name, email, password, address };
    users.push(newUser);

    // Lưu vào localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Reset form
    this.setState({
      name: "",
      email: "",
      password: "",
      address: "",
      message: "Đăng ký tài khoản thành công!",
    });

    // Focus lại input tên sinh viên
    this.nameRef.current.focus();
  };

  render() {
    const { name, email, password, address, message } = this.state;

    return (
      <div >
        <h3>Đăng ký tài khoản</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Tên sinh viên</label>
          <br />
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
            ref={this.nameRef}
          />
          <br />

          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <br />

          <label>Mật khẩu</label>
          <br />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <br />

          <label>Địa chỉ</label>
          <br />
          <input
            type="text"
            name="address"
            onChange={this.handleChange}
            value={address}
          />
          <br />

          <button type="submit">Đăng ký</button>
        </form>

        {message && <p style={{ color: "red" }}>{message}</p>}
      </div>
    );
  }
}
