// src/components/Menu.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../stores/slices/Ex05";

import {
  DashboardOutlined,
  UserOutlined,
  DollarOutlined,
  LineChartOutlined,
  FileOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

export default function Ex05() {
  const dispatch = useDispatch();
  const collapsed = useSelector((state: any) => state.menu.collapsed);

  const menuItems = [
    { icon: <DashboardOutlined />, label: "Bảng điều khiển" },
    { icon: <UserOutlined />, label: "Tài khoản" },
    { icon: <DollarOutlined />, label: "Tài sản" },
    { icon: <LineChartOutlined />, label: "Thống kê" },
    { icon: <FileOutlined />, label: "Tài liệu" },
  ];

  return (
    <div
      style={{
        width: collapsed ? "60px" : "200px",
        backgroundColor: "#001f3f",
        minHeight: "100vh",
        color: "white",
        transition: "all 0.3s",
        padding: "10px 0",
      }}
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: "18px", marginRight: collapsed ? 0 : 10 }}>
            {item.icon}
          </span>
          {!collapsed && <span>{item.label}</span>}
        </div>
      ))}

      {/* Nút thu gọn/mở rộng */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={() => dispatch(toggleMenu())}
      >
        <span style={{ fontSize: "18px" }}>
          {collapsed ? <RightOutlined /> : <LeftOutlined />}
        </span>
        {!collapsed && <span style={{ marginLeft: "10px" }}>Thu gọn</span>}
      </div>
    </div>
  );
}
