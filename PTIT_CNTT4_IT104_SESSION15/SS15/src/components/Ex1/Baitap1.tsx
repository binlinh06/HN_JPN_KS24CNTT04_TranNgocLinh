import React, { Component } from 'react'
type State={
    email:string
}
export default class Baitap1 extends Component<{},State> {
    constructor(props:{}){
        super(props);
        this.state={
            email:"",

        }
    }
    handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(this.state.email)
    }
    handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            email:e.target.value
        })
    }
  render() {
    return (
      <div>
        <h3>Form</h3>
        <form onSubmit={this.handleSubmit}> 
            <label htmlFor="">Email</label><br/>
            <input type="email"  value={this.state.email} onChange={this.handleChange}></input>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
