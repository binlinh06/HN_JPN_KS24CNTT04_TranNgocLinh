import React from 'react'

export default function Baitap2() {
    let a:number = 10;
    let b:number =10;
    let result1:number = a + b;
    let result2:number = a - b;
    let result3:number = a * b;
    let result4:number = a / b;
  return (
    <div>
      <h3>Danh sách kết quả</h3>
      <li>{a} + {b} = {result1}</li>
      <li>{a} - {b} = {result2}</li>
      <li>{a} * {b} = {result3}</li>
      <li>{a} / {b} = {result4}</li>
    </div>
  )
}
