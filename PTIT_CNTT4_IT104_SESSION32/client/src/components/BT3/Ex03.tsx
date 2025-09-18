import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Ex03() {
  const result: any = useSelector((data) => {
    console.log("data", data);
    return data.counter;
  });
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const discrease = () => {
    dispatch({
      type: "DISCREMENT",
    });
  };
  return (
    <div>
      <h1>Ung dung Counter</h1>
      <p>gia tri count:{result.count}</p>
      <button onClick={increase}>tang</button>
      <button onClick={discrease}>giam</button>
    </div>
  );
}
