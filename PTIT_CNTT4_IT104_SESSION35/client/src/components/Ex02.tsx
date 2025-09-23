import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateRandom } from "../stores/slices/Ex02";

export default function Ex02() {
  const numbers = useSelector((state: any) => state.random.numbers);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>List number: [{numbers.join(",")}]</h3>
      <button onClick={() => dispatch(generateRandom())}>
        Random number
      </button>
    </div>
  );
}
