import React, { useEffect, useState } from "react";

export default function Baitap5() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      console.log("Timer dừng!");
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <p>Giá trị: {count}</p>
    </div>
  );
}
