import React, { Component } from "react";

export default class Baitap7 extends Component {
  state = {
    time: new Date()
  };

  // Khi component được mount
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  // Khi component bị hủy
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h3>
          Thời gian hiện tại:{" "}
          {time.getHours().toString().padStart(2, "0")} :{" "}
          {time.getMinutes().toString().padStart(2, "0")} :{" "}
          {time.getSeconds().toString().padStart(2, "0")}
        </h3>
      </div>
    );
  }
}
