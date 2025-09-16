import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
const data = [
  {
    id: 1,
    name: "iphone15",
    price: 50000,
  },
  {
    id: 2,
    name: "iphone215",
    price: 350000,
  },
  {
    id: 3,
    name: "iphone5",
    price: 250000,
  },
];
export default function ProductManager() {
  const [product, setProduct] = useState<any>(data);
  const navigate =useNavigate()
  const handleClick=(id:any)=>{
    navigate(`/admin/product/${1}`)
  }
  return (
    <div>
      Trang quan ly san pham
      <h1>Danh sach san pham</h1>
      <table border={1  }>
        <thead>
          <tr>
            <th>STT</th>
            <th>Ten san pham</th>
            <th>Gia</th>
            <th>Hanh dong</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item: any, index: number) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><button onClick={()=>handleClick(item.id)}> Xem chi tiet</button> </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
