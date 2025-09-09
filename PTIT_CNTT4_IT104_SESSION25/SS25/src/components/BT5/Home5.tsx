import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound5 from './NotFound5';
export default function Home4() {
  const routers = createBrowserRouter([
    {
      path: "/NotFound5",
      element: <NotFound5></NotFound5>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}
