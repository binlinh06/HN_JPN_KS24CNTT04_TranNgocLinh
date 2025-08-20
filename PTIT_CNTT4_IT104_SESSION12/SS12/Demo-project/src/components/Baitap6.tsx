import React from "react";

export default function Baitap6() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#d0d5db",
        }}
      >
        Header
      </div>

      {/* Content */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Menu */}
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#163f86",
            color: "white",
            width: "230px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Menu
        </div>

        {/* Main */}
        <div
          style={{
            flex: 1,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          Main
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#d0d5db",
        }}
      >
        Footer
      </div>
    </div>
  );
}
