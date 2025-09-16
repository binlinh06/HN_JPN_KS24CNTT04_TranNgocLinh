import React from 'react'
import {Navigate} from 'react-router-dom'
export default function ProtectedRoute(props:any) {
    const isLogin = true
    if(!isLogin){
        return <Navigate to="/login"></Navigate>
    }
    return props.element
}
