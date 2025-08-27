import React, { useReducer } from "react";
type State = {
  text: string;
};
type Action = {
  type: "SET_TEXT";
  payload: string;
};
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_TEXT":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
export default function Baitap5() {
  const [state, dispatch] = useReducer(reducer, { text: "" });
  return (
    <div>
      <h1>{state.text || "Input change"}</h1>
      <input
        type="text"
        value={state.text}
        onChange={(e) =>
          dispatch({ type: "SET_TEXT", payload: e.target.value })
        }
        placeholder="Nhập văn bản..."
      />
    </div>
  );
}
