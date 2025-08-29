import React, { useReducer } from "react";
type State = {
  name: string;
  email: string;
};
export default function Baitap8() {
  const initial: State = {
    name: "",
    email: "",
  };
  const setReducer = (state: State, action: any): State => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "SET_EMAIL":
        return { ...state, email: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(setReducer, initial);
  const SET_NAME = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  };
  const SET_EMAIL = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
  };
  return (
    <div>
      <h3>User Information Form</h3>
      <form action="">
        <label htmlFor="" >
          Ten:
        </label>{" "}
        <br />
        <input type="text" value={state.name} onChange={SET_NAME} /> <br />
        <label htmlFor="">
          Email:
        </label>{" "}
        <br />
        <input type="email" value={state.email} onChange={SET_EMAIL}/> <br />
      </form>
      <div>
        <h4>Thông tin người dùng:</h4>
        <p>
          <b>Tên:</b> {state.name}
        </p>
        <p>
          <b>Email:</b> {state.email}
        </p>
      </div>
    </div>
  );
}
