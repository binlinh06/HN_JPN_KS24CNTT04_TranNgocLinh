import React, { Component } from "react";
type State={
    gender:string;
    submitted:boolean;
}
export default class Baitap6 extends Component<{},State> {
    constructor(props:{}){
        super(props);
        this.state ={
            gender:"",
            submitted:false,
        }
    }
    handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        this.setState({ submitted: true });
    }
    handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
      gender: e.target.value,
    });
  };

    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Giới tính: {this.state.submitted ? this.state.gender : ""}</p>

          <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={this.state.gender === "Nam"}
              onChange={this.handleChange}
            />
            Nam
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={this.state.gender === "Nữ"}
              onChange={this.handleChange}
            />
            Nữ
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={this.state.gender === "Khác"}
              onChange={this.handleChange}
            />
            Khác
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
