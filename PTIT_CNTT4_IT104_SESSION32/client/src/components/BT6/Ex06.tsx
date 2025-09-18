import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers/rootReducer";

export default function Ex06() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "TOGGLE_THEME", payload: e.target.checked });
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        height: "100vh",
        padding: "20px",
      }}
    >
      <label>
        <input type="checkbox" checked={darkMode} onChange={handleToggle} /> Tối
      </label>
      <h1>{darkMode ? "Chế độ Tối" : "Chế độ Sáng"}</h1>
    </div>
  );
}
