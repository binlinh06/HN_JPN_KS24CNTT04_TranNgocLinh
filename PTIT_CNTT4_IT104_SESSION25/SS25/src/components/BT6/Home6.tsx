import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Product from "./Product";
import Detail from "./Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Home />
      </div>
    ),
  },
  {
    path: "/product",
    element: (
      <div>
        <Header />
        <Product />
      </div>
    ),
  },
  {
    path: "/detail",
    element: (
      <div>
        <Header />
        <Detail />
      </div>
    ),
  },
]);

export default function Home6() {
  return <RouterProvider router={router} />;
}
