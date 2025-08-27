import React, { useReducer } from "react";

export default function Baitap1() {
  const initial = {
    count: 0,
  };
  const countReducer = (state: any, action: any) => {
    switch (action.type) {
      case "INCREASE":
        return { count: state.count + action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(countReducer, initial);
  const increase = () => {
    dispatch({ type: "INCREASE", payload: 1 });
  };
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
