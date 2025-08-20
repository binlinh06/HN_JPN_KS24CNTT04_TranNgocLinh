import React, { useState } from "react";

const Input: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h2>Dữ liệu: {value}</h2>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;
