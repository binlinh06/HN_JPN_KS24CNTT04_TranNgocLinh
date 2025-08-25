import React, { Component } from "react";
type State ={
   label: string;
  color: string;
  textColor?: string; // optional
}
export default class Baitap3 extends Component<{},State> {
  constructor(props:{}){
    super(props)
    this.state={
      button:[
      { label: "Primary", color: "#0d6efd" },
      { label: "Secondary", color: "#6c757d" },
      { label: "Success", color: "#198754" },
      { label: "Warning", color: "#ffc107",textColor: "#000" },
      { label: "Danger", color: "#dc3545" },
      { label: "Info", color: "#0dcaf0",textColor: "#000" },
      { label: "Light", color: "#f8f9fa", textColor: "#000" },
      { label: "Dark", color: "#212529" },
      { label: "Link", color: "transparent", textColor: "#0d6efd" },
    ],
    }
  }
  render() {
    return (
      <div>
        {this.state.button.map((btn, index) => (
          <button
            key={index}
            style={{
              backgroundColor: btn.color,
              color: btn.textColor || "white",
              border: btn.label === "Link" ? "none" : "1px solid transparent",
              textDecoration: btn.label === "Link" ? "underline" : "none",
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>
    );
  }
}
