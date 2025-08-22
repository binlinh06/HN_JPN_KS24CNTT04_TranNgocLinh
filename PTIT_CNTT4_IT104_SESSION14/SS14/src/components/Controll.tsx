import React, { Component } from "react";

type User = {
  email: string;
  password: string;
};

type InitialState = {
  user: User;
};

export default class Controll extends Component<{}, InitialState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
      },
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", this.state.user);
    this.setState({
      user: {
        email: "",
        password: "",
      },
    });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Gia tri name:", e.target.name);
    const { name, value } = e.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div>
        Form dùng kỹ thuật Controlled
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            onChange={this.handleChange}
            name="email"
            value={this.state.user.email}
          />
          <br />

          <label>Password</label>
          <input
            type="password"
            onChange={this.handleChange}
            name="password"
            value={this.state.user.password}
          />
          <br />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
