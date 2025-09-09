import React from 'react'
import {Outlet,NavLink} from 'react-router-dom'
export default function Admin() {
  return (
    <div>
Trang quan ly
<NavLink to="/admin/user">Quan ly nguoi dung</NavLink>
<NavLink to="/admin/product">Quan ly san pham</NavLink>
<NavLink to="/admin/order">Quan ly hoa don</NavLink>
<div className="header">
    Phần đầu
</div > <hr/>
<Outlet></Outlet> <hr/>
<div className="footer">
    Phần cuối
</div >
    </div>
  )
}
