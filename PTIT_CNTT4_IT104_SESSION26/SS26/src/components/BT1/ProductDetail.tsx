import React from 'react'
import {useParams} from 'react-router-dom'

export default function ProductDetail() {
    const param = useParams()
    console.log("id",param);
    
  return (
    <div>
      {param.id}
    </div>
  )
}
