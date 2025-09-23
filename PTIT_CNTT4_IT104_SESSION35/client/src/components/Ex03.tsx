import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../stores/slices/Ex03";

export default function Ex03() {
  const theme = useSelector((state: any) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        height: "100vh",
        textAlign: "center",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <h1>Chế độ hiện tại: {theme === "light" ? "Sáng" : "Tối"}</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        Chuyển sang {theme === "light" ? "Tối" : "Sáng"}
      </button>
    </div>
  );
}
