import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact2 from './Contact2';
export default function Home2() {
  const routers = createBrowserRouter([
    {
      path: "/contact",
      element: <Contact2></Contact2>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}
