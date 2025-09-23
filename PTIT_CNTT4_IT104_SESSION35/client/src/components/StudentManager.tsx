import React, { useState } from "react";
import type { Student } from "../utils/type";
import { addStudent, deleteStudent } from "../stores/slices/studentSlice";
import { useDispatch, useSelector } from "react-redux";
export default function StudentManager() {
  const [user, setUser] = useState<Student>({
    id: Math.floor(Math.random() * 999999),
    name: "",
  });
  const result = useSelector((data:any) => {
    return data.students.students;
  });
  const dispatch = useDispatch();
  const addNewStudent = () => {
    dispatch(addStudent(user));
  };
  const handleDelete = () =>{
    dispatch(deleteStudent(user))
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: e.target.value });
  };
  return (
    <div>
      <h1>Quan ly sinh vien</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={addNewStudent}>Them</button>
      <ul>
        {result.map((item: Student, index: number) => {
          return <li key={item.id}>{item.name} <button onClick={handleDelete}>Xoa</button></li>;
        })}
      </ul>
    </div>
  );
}
