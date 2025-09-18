import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers/rootReducer";

export default function Ex05() {
  const company = useSelector((state: RootState) => state.company.company);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({ type: "CHANGE_COMPANY" });
  };

  return (
    <div>
      <h2>{company}</h2>
      <button onClick={handleChange}>Change state</button>
    </div>
  );
}
