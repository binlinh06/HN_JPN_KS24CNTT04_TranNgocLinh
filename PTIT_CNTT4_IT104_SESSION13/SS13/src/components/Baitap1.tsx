import React, { Component } from "react";

type State = {
  fullName: string;
};
export default class Baitap1 extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      fullname: "Tran Ngoc Linh"
    };
  }
  render() {
    return (
      <div>
        <h2>Họ và tên: {this.state.fullname}</h2>
      </div>
    );
  }
}
