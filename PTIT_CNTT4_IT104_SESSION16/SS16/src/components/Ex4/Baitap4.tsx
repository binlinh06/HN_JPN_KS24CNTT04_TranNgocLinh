import React, { Component } from 'react'
type State={
  count:number
}
export default class Baitap4 extends Component<{},State> {
  constructor(props:{}){
    super(props)
    this.state={
      count:0,
    }
  }
  handleChange=()=>{
    this.setState((prevState)=>({
      count:prevState.count +1
    }))
  }
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleChange}>Click me</button>
      </div>
    )
  }
}
