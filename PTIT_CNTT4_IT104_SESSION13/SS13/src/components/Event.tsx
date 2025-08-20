import React, { Component } from 'react'
type Task ={
    id:number,
    task:string,
    completed:boolean
}
type initialState ={
    todos:Task[];
    taskName:string
}
export default class Event extends Component<{},initialState> {
    constructor(props:{}){
        super(props)
        this.state={
            taskName:"",
            todos:[
                {
                id:1,
                task:"Hoc react",
                completed:false
            },                {
                id:2,
                task:"Hoc react2",
                completed:false
            },                {
                id:3,
                task:"Hoc react3",
                completed:false
            },
        ]
        }
    }

deleteTask =(id:number)=> {
    console.log("id cong viec la:",id);
    let new_todo = this.state.todos.filter(item =>item.id !=id);
    this.setState({todos:new_todo})
}
handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log("gia tri o inout",e.target.value);
    this.setState({taskName:e.target.value})
}
addTodo=()=>{
    if(this.state.taskName){
        let new_todo = {
            id:Math.floor(Math.random()*999999),
            task:this.state.taskName,
            completed:false
        }
        this.setState({todos:[...this.state.todos,new_todo]})
    }
}
  render() {
    return (
      <div>
        <h1>Danh sach cong viec can lam</h1>
        <input type="text" placeholder = "Nhap cong viec" onChange={this.handleChange}/>
        <button onClick ={this.addTodo}>Them cong viec</button>
        <ul>
            {this.state.todos.map((item:Task,index)=>{
                return <>
                    <li key = {index}>Ten cong viec:{item.task}</li>
                    <button onClick = {()=>this.deleteTask(item.id)}>Xoa</button>
                    <button onClick = {()=>this.Change(item.id)}>Sua</button>
                </>
            })}
        </ul>
      </div>
    )
  }
}
