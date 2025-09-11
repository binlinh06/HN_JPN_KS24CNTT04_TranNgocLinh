import React from "react";
import { Outlet, NavLink } from "react-router-dom";
export default function Ex1() {
  return (
    <div>
      <div className="header bg-blue-500 text-white flex justify-around p-3" >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div><hr/>
      <Outlet ></Outlet> <hr/>
    </div>
  );
}
