import React,{useEffect,useState } from 'react'

export default function Baitap4() {
    const [title,setTitle] = useState("")
    useEffect(()=>{
        document.title = `Chao ${title}` 
    },[title])
    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }
  return (
    <div>
      <h2>Chào mừng bạn đến với trang của chúng tôi!</h2>
      <input
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Nhập tiêu đề trang"
      />
      <p>Tiêu đề trang sẽ thay đổi khi bạn nhập tên vào trường trên.</p>
    </div>
  )
}
