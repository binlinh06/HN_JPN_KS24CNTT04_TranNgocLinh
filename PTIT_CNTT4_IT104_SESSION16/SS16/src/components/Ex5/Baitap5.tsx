import React, { Component, ChangeEvent } from "react";

type State = {
  user: {
    name: string;
    email: string;
    age: string;
  };
  error: string;
  submittedData: {
    name: string;
    email: string;
    age: string;
  } | null;
};

export default class Baitap5 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        age: "",
      },
      error: "",
      submittedData: null,
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, age } = this.state.user;

    if (!email.includes("@")) {
      this.setState({ error: "Email không hợp lệ" });
      return;
    }
    if (isNaN(parseInt(age))) {
      this.setState({ error: "Tuổi phải là số" });
      return;
    }
    if (parseInt(age) < 0) {
      this.setState({ error: "Tuổi không được âm" });
      return;
    }

    this.setState({
      error: "",
      submittedData: { name, email, age },
    });
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value, 
      },
    }));
  };

  handleReset = () => {
    this.setState({
      user: {
        name: "",
        email: "",
        age: "",
      },
      error: "",
      submittedData: null,
    });
  };

  render() {
    const { user, error, submittedData } = this.state;
    const { name, email, age } = user;

    return (
      <div>
        <h2>Nhập thông tin người dùng</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Họ tên"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="number"
            placeholder="Tuổi"
            name="age"
            value={age}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Gửi</button>
          <button type="button" onClick={this.handleReset}>
            Xóa tất cả
          </button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {submittedData && (
          <div>
            <h3>Thông tin đã nhập:</h3>
            <p>Họ tên: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
            <p>Tuổi: {submittedData.age}</p>
          </div>
        )}
      </div>
    );
  }
}
