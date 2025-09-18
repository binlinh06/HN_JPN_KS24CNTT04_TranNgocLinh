import React from 'react'
import { useSelector } from 'react-redux'

export default function Student() {
    const result = useSelector((data:any)=>{
        console.log("data",data);
        return data.students.users

    })
  return (
    <div>
      <h1>Quan Ly Sinh Vien</h1>
      <ul>
        {result.map((item:any,index:number)=>{
            return <li key={index}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}
