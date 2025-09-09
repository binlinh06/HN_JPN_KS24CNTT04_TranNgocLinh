import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login3 from './Login3';
export default function Home3() {
  const routers = createBrowserRouter([
    {
      path: "/login",
      element: <Login3></Login3>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}
