import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";

export default function Ex04() {
  const numbers = useSelector((state: RootState) => state.random.numbers);
  const dispatch = useDispatch();

  const handleGenerate = () => {
    const randomNum = Math.floor(Math.random() * 100); // 0-99
    dispatch({ type: "ADD_RANDOM", payload: randomNum });
  };

  return (
    <div>
      <h3>{JSON.stringify(numbers)}</h3>
      <button onClick={handleGenerate}>Generate Random Number</button>
    </div>
  );
}
