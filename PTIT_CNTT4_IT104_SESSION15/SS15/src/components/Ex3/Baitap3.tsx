import React, { Component } from "react";
type State = {
  date: string;
  sub: boolean;
};
export default class Baitap3 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      date: "",
      sub: false,
    };
  }
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      sub: true,
    });
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      date: e.target.value,
    });
    this.setState({
      sub: false,
    });
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <h3>Ngày sinh:{this.state.sub ? this.state.date : ""}</h3>
          <br />
          <input
            type="date"
            value={this.state.date}
            onChange={this.handleChange}
          ></input>
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
