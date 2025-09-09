import React from "react";
import { Link } from "react-router-dom";

export default function CustomLink() {
  return (
    <div>
      <h2> Đây là CustomLink</h2>
      <Link to="/home-page">Đi đến HomePage</Link>
    </div>
  );
}
