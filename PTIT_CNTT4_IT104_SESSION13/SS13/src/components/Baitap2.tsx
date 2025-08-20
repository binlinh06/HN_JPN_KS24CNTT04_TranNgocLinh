import React, { Component } from 'react'
type State ={
  id:number,
  name:string,
  age:string,
  address:string
}
export default class Baitap2 extends Component {
  constructor(props:{}){
    super(props);
    this.state={
      id:1,
      name:"Nguyen Van Son",
      age:"20/12/2023",
      address:"Thanh Xuan,Ha Noi"
    }
  }
  render() {
    return (
      <div>
        <h3>Thong tin ca nhan</h3>
        <p>ID: {this.state.id}</p>
        <p>Họ và tên: {this.state.name}</p>
        <p>Ngày sinh: {this.state.age}</p>
        <p>Địa chỉ: {this.state.address}</p>
      </div>
    )
  }
}
