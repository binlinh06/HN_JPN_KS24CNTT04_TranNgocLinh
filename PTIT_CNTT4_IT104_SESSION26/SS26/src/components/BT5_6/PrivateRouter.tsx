import React from "react";
import {Navigate} from 'react-router-dom'
export default function PrivateRouter(props:any) {
  const isLogin = localStorage.getItem("isLogin") === "true";
  if (!isLogin) {
    return <Navigate to="/login"></Navigate>;
  }
  return props.element;
}
