import React from 'react'

export default function Baitap7() {
  return (
<div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "#cfd8e0",
          padding: "20px",
          textAlign: "center",
        }}
      >
        Header
      </header>

      {/* Navigation */}
      <nav
        style={{
          backgroundColor: "#888f9a",
          padding: "15px",
          textAlign: "center",
        }}
      >
        Navigation
      </nav>

      {/* Content */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Menu */}
        <aside
          style={{
            backgroundColor: "#19a34a",
            width: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Menu
        </aside>

        {/* Main */}
        <main
          style={{
            flex: 1,
            backgroundColor: "#fff5f5",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              width: "100%",
              maxWidth: "1000px",
            }}
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #ddd",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                Cart
              </div>
            ))}
          </div>
        </main>

        {/* Article */}
        <aside
          style={{
            backgroundColor: "#90c8ff",
            width: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Article
        </aside>
      </div>
    </div>
  )
}
