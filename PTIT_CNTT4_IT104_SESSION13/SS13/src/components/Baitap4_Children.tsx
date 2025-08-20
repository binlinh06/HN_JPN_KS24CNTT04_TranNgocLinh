import React, { Component } from 'react'
type State ={
    name:string
}
export default class Baitap4_Children extends Component {
  render() {
    return (
      <div>
        Ho va ten ben Component con:{this.props.name}
      </div>
    )
  }
}
