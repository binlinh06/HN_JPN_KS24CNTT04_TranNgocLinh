import React, { useReducer, useState } from "react";

export default function Baitap8() {
  const initialState = {
    loading: false,
    success: false,
    error: "",
  };
  const loginReducer = (state: typeof initialState, action: any) => {
    switch (action.type) {
      case "LOGIN_START":
        return { loading: true, success: false, error: "" };
      case "LOGIN_SUCCESS":
        return { loading: false, success: true, error: "" };
      case "LOGIN_ERROR":
        return { loading: false, success: false, error: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    setTimeout(() => {
      if (username === "admin" && password === "123") {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({
          type: "LOGIN_ERROR",
          payload: "Sai tài khoản hoặc mật khẩu",
        });
      }
    }, 1000);
  };

  return (
    <div>
      <h3>Đăng nhập</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Tên người dùng</label> <br />
        <input
          type="text"
          placeholder="Tên người dùng"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label htmlFor="">Mật khẩu</label> <br />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button type="submit">
          {" "}
          {state.loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
      </form>
      <div style={{ marginTop: "15px" }}>
        {state.loading && <p>⏳ Đang đăng nhập...</p>}
        {state.success && (
          <p style={{ color: "green" }}>✅ Đăng nhập thành công!</p>
        )}
        {state.error && <p style={{ color: "red" }}>❌ {state.error}</p>}
      </div>
    </div>
  );
}
