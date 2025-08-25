import React, { Component } from "react";

type State = {
  isDarkMode: boolean;
};

export default class Baitap6 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }
  handleChange = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { isDarkMode } = this.state;
    return (
      <div
        style={{
          backgroundColor: isDarkMode ? "white" : "black",
          color: isDarkMode ? "black" : "white",
        }}
      >
        <h2>{isDarkMode ? "☀️ Chế độ Sáng đang bật" : "🌙 Chế độ Tối đang bật"}</h2>
        <button onClick={this.handleChange}>Chuyển theme</button>
      </div>
    );
  }
}
