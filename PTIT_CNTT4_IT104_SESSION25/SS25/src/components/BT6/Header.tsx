import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="menu">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>

      <NavLink
        to="/product"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Product
      </NavLink>

      <NavLink
        to="/detail"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Detail
      </NavLink>
    </nav>
  );
}
