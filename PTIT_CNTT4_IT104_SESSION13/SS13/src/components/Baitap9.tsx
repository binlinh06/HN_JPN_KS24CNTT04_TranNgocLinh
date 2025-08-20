import React, { useState } from "react";

const UpdateState: React.FC = () => {
  // Khai báo state với type string
  const [company, setCompany] = useState<string>("Rikkei Academy");

  // Hàm đổi tên công ty
  const handleChangeCompany = () => {
    setCompany((prev) =>
      prev === "Rikkei Academy" ? "Rikkei Soft" : "Rikkei Academy"
    );
  };

  return (
    <div>
      <h2>{company}</h2>
      <button onClick={handleChangeCompany}>Change</button>
    </div>
  );
};

export default UpdateState;
