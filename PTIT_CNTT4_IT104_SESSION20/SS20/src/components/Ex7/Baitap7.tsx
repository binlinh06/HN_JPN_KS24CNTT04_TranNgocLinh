import React,{useReducer } from 'react'

export default function Baitap7() {
    const initial ={
        count:0
    }
    const countReducer = (state:any,action:any) =>{
        switch(action.type){
            case "INCREASE":
                return {count:state.count +action.payload}
            case "DECREASE":
                return {count:state.count - action.payload}
            default:
                return state
        }
    }
    const [state,dispatch] = useReducer(countReducer,initial)
    const increase = ()=>{
        dispatch({type:"INCREASE",payload:1})
    }
    const descrease =()=>{
        dispatch({type:"DECREASE",payload:1})
    }
  return (
    <div>
      <h1>Số đếm : {state.count}</h1>
    <button onClick={increase}>Tang </button>
    
    <button onClick = {descrease}>Giam</button>
    </div>
  )
}
