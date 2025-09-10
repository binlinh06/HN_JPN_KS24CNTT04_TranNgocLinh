import React from "react";
import { useParams } from "react-router-dom";

export default function Team() {
  const { teamId } = useParams(); 

  return (
    <div>
      <h2>Chi tiết đội</h2>
      <p>Team ID: {teamId}</p>
    </div>
  );
}
