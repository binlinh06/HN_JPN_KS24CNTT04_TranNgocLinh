import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact1 from './Contact1';
import About1 from './About1';
export default function Home1() {
  const routers = createBrowserRouter([
    {
      path: "/about",
      element: <About1></About1>,
    },
    {
      path: "/contact",
      element: <Contact1></Contact1>,
    },
  ]);
  return (
    <div>
        Day la trang chu
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}
