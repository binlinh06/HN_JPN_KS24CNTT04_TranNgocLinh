import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
// import Register from "./components/BT7/Register";
// import Login from "./components/BT7/Login";
import Ex08 from "./components/BT8/Ex08";
// import Ex06 from "./components/BT6/Ex06";
// import Ex05 from './components/BT5/Ex05'
// import Ex04 from './components/BT4/Ex04'
// import Ex03 from './components/BT3/Ex03'
// import Ex02 from './components/BT2/Ex02'
// import Counter from './page/Counter'
// import Student from './page/Student'
// import Ex01 from './components/BT1/Ex01'

export default function App() {
  function MainApp() {
    const currentPage = useSelector((state: any) => state.auth.currentPage);

    return (
      <div>
        {currentPage === "register" && <Register />}
        {currentPage === "login" && <Login />}
      </div>
    );
  }
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.admin.user); 
  useEffect(() => {
    console.log("Thông tin user đang đăng nhập:", user);
  }, [user]);
  return (
    <div>
      {/* <Counter></Counter>
      <Student></Student> */}
      {/* <Ex01></Ex01> */}
      {/* <Ex02></Ex02> */}
      {/* <Ex03></Ex03> */}
      {/* <Ex04></Ex04> */}
      {/* <Ex05></Ex05> */}
      {/* <Ex06></Ex06> */}
      {/* <MainApp /> */}
      {!user ? (
        <Ex08 />
      ) : (
        <>
          <h3>Xin chào, {user.email}</h3>
          <button onClick={() => dispatch({ type: "LOGOUT" })}>
            Đăng xuất
          </button>
        </>
      )}
    </div>
  );
}
