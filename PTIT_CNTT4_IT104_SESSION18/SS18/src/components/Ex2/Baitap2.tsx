import React, { useMemo } from "react";
type User = {
  id: number;
  name: string;
  age: number;
};
export default function Baitap2() {
  const users: User[] = [
    { id: 1, name: "An", age: 16 },
    { id: 2, name: "Bình", age: 20 },
    { id: 3, name: "Chi", age: 25 },
    { id: 4, name: "Dung", age: 17 },
  ];
  const adultUsers = useMemo(() => {
    return users.filter((user) => user.age > 18);
  }, [users]);
  return (
    <div>
      <h2>Danh sách người dùng trên 18 tuổi</h2>
      <ul>
        {adultUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}
