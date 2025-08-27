import React, { useReducer } from "react";
type Job = {
  id: number;
  title: string;
  completes: boolean;
};
export default function Todos() {
  const initial = {
    jobs: [
      {
        id: 1,
        title: "Hoc CSS",
        completes: true,
      },
      {
        id: 2,
        title: "Hoc CSS",
        completes: true,
      },
    ],
    new_title: "",
  };
  const todoReducer = (state: any, action: any) => {
    switch (action.type) {
      case "ADD":
        console.log("Them cong viec");
        return { jobs: [...state.jobs, action.payload] };
      case "EDIT":
        console.log("Sua thanh cong")
        let index = state.jobs.findIndex((item:Job)=>item.id == action.payload.id)  
        state.jobs.splice(index,1,action.payload)
        return {jobs:state.jobs}
      case "DELETE":
        console.log("Tien hanh xoa cong viec");
        let result = state.jobs.filter(
          (item: Job) => item.id != action.payload
        );
        return { jobs: result };
      default:
        return state;
    }
  };
  const [todos, dispatch] = useReducer(todoReducer, initial);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    initial.new_title = e.target.value;
  };
  const addTodo = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 9999999999),
      title: initial.new_title,
      completes: false,
    };
    dispatch({ type: "ADD", payload: newTodo });
  };
  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const handleFix =(item:Job)=>{
    let new_title = prompt("Moi nhap ten moi")
    let new_job = {...item,title:new_title}
    dispatch({type:"EDIT",payload:new_job})
  }
  return (
    <div>
      <input onChange={handleChange} type="text"></input>
      <button onClick={addTodo}>Them cong viec</button>
      <h1>DANH SACH CONG VIEC</h1>
      {todos.jobs.map((item: Job, index: number) => {
        return (
          <li key={index}>
            {item.title}
            <button onClick={() => handleDelete(item.id)}>Xoa</button>
            <button onClick={() => handleFix(item)}>Sua</button>
          </li>
        );
      })}
    </div>
  );
}
