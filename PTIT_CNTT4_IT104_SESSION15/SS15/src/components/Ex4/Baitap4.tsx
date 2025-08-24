import React, { Component } from 'react'
type State ={
  number:string;
  sub:boolean
}
export default class Baitap4 extends Component<{},State> {
  constructor(props:{}){
    super(props)
    this.state={
      number:"",
      sub:false
    }
  }
  handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    this.setState({
      sub:true
    })
  }
  handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    this.setState({
      number:e.target.value
    })
    this.setState({
      sub:false
    })
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <h3>Tiến độ hoàn thành:{this.state.sub ? this.state.number :""} %</h3><br/>
          <input type="range" value={this.state.number} onChange={this.handleChange}></input><br/>
          <button >Submit</button>
        </form>
      </div>
    )
  }
}
