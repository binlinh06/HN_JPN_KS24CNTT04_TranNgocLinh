import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Teams() {
  return (
    <div>
      <h1>Trang Teams</h1>
      <ul>
        <li>
          <Link to="1">Team 1</Link>
        </li>
        <li>
          <Link to="2">Team 2</Link>
        </li>
        <li>
          <Link to="3">Team 3</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
