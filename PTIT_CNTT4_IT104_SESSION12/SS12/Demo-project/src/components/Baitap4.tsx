import React from 'react'

interface ColorBoxProps {
  color: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ color }) => {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {/* Ô vuông */}
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontWeight: "bold",
          margin: "auto",
        }}
      >
        Box
      </div>
      {/* Nhãn màu */}
      <div style={{ marginTop: "10px" }}>
        <span style={{ border: "1px solid gray", padding: "5px 10px" }}>
          {color}
        </span>
      </div>
    </div>
  );
};

export default function Baitap4() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ColorBox color="red" />  
      <ColorBox color="blue" />
      <ColorBox color="green" />
    </div>
  );
}
