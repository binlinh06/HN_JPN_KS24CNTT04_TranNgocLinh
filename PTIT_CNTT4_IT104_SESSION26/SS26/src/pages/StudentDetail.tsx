import React from 'react'
import {useParams} from 'react-router-dom'

export default function StudentDetail() {
    const param = useParams()
    console.log("name",param);
    
  return (
    <div>
      {param.name}
    </div>
  )
}
