import React, { Component } from 'react'
type initialState = {
    name:string,
    student:string[],
    isLogin:boolean
}
export default class State extends Component<{},initialState> {
    constructor(props:{}){
        super(props)
        this.state = {
            name:"Linh",
            student:["Duy","Minh"],
            isLogin:true
        }
    }
    handleChangeName = ()=>{
        this.setState({name:"DUY CC"})
    }
  render() {
    console.log("Bi re-render");
    
    return (
      <div>
        Hoc ve state
        <p>Ten SV:{this.state.name}</p>
        <button onClick = {this.handleChangeName}>ChangeName</button>
        <ul>
            {this.state.student.map((item,index) =><li key = {index}>{item}</li>)}
        </ul>
      </div>
    )
  }
}
