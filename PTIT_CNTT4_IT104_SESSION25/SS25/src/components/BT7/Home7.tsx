import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomLink from "./CustomLink";
import HomePage from "./HomePage";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomLink />, 
  },
  {
    path: "/home-page",
    element: <HomePage />,    
  },
  {
    path: "*",
    element: <NotFound />,    
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
