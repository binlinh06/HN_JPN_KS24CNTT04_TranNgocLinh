import React, { Component } from "react";

export default class Baitap8 extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count >= 10 ? 0 : prevState.count + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
      </div>
    );
  }
}
