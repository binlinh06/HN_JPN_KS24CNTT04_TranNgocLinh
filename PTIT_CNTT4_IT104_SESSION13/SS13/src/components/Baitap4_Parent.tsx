import React, { Component } from 'react'
import Baitap4_Children from './Baitap4_Children'
type State={
  name:string
}
export default class Baitap4_Parent extends Component {
  constructor(props:{}){
    super(props);
    this.state ={
      name : "Nguyen Van Nam"
    }
  }
  render() {
    return (
      <div>
        Ho va ten ben Component cha:{this.state.name}
        <Baitap4_Children name="Nguyen Van Nam"></Baitap4_Children>
      </div>
    )
  }
}
