import React from "react";
import { Outlet} from "react-router-dom";
export default function Ex2() {
  return (
    <div >
      <div className="text-center text-white bg-blue-500">
        <h1>Trang chi tiet san pham</h1>
        <h4>Danh sach san pham</h4>
      </div>

      <Outlet></Outlet>
    </div>
  );
}
