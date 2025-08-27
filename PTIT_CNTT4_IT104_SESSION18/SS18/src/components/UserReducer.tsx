import React, { useReducer } from "react";

export default function UserReducer() {
  const initialState = {
    count: 0,
  };
  const countReducer = (state: any, action: any) => {
    console.log("action", action);
    //     if (action.type == "INCREASE") {
    //       return { count: state.count + action.payload };
    //     }else if(action.type == "DECREASE"){
    //         return {count :state.count - action.payload}
    //     }
    //     return state;
    switch (action.type) {
      case "INCREASE":
        return { count: state.count + action.payload };
      case "DECREASE":
        return { count: state.count - action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(countReducer, initialState);
  const increase = () => {
    dispatch({ type: "INCREASE", payload: 3 });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE", payload: 1 });
  };
  return (
    <div>
      <h1>UserReducer</h1>
      <p>Gia tri state :{state.count}</p>
      <button onClick={increase}>Click</button>
      <button onClick={decrease}>Click</button>
    </div>
  );
}
