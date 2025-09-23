import React from "react";
import { increment, decrement, reset } from "../stores/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import type { CounterState } from "../utils/type";

export default function Counter() {
  const result = useSelector((data: CounterState) => {
    return data.counter.value;
  });
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(increment());
  };
  const decrease = () => {
    dispatch(decrement());
  };
  const resetse = () => {
    dispatch(reset());
  };
  return (
    <div>
      <p>Gia tri counter = {result}</p>
      <button onClick={increase}>Tang</button>
      <button onClick={decrease}>giam</button>
      <button onClick={resetse}>reset</button>
    </div>
  );
}
