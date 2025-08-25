import React, { Component } from 'react'
type State={
    subject:string[]
}
export default class Baitap1 extends Component<{},State> {
    constructor(props:{}){
        super(props);
        this.state={
            subject:["Toan","Van","Anh"]
        }
    }
  render() {
    return (
      <div>
        <h2>Danh sach mon hoc</h2>
        <ul>
            {this.state.subject.map((subject,index)=>
            <li key ={index}>{subject}</li>)}
        </ul>
        
      </div>
    )
  }
}
