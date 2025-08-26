import React,{ useState } from 'react'

export default function Baitap1() {
  const [name,setName] = useState("Nguyen Van A")
  return (
    <div>
      <h1>Họ và tên :{name}</h1>
    </div>
  )
}
