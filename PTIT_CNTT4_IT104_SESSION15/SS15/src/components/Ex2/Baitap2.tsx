import React, { Component } from "react";
type State = {
  color: string;
  submitted: boolean;
};
export default class Baitap2 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      color: "",
      submitted: false,
    };
  }
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      color: e.target.value,
    });
    this.setState({submitted:false})
  };
  render() {
    return (
      <div>
        <h3>Color:{this.state.submitted ? this.state.color : ""}</h3>
        <form onSubmit={this.handleSubmit}>
          <h4>Form</h4>
          <label>Mau sac</label>
          <br />
          <input
            type="color"
            value={this.state.color}
            onChange={this.handleChange}
            name="color"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
