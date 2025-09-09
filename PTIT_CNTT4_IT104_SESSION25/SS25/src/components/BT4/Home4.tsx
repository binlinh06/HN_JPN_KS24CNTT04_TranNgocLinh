import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register4 from './Register4';
export default function Home4() {
  const routers = createBrowserRouter([
    {
      path: "/register",
      element: <Register4></Register4>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}
