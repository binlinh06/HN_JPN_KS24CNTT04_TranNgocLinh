import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/Routes'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}