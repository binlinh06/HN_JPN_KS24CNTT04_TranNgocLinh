import React from "react";
// import Home1 from "./components/BT1/Home1";
// import Home2 from "./components/BT2/Home2";
// import Home3 from "./components/BT3/Home3";
// import Home4 from "./components/BT4/Home4";
// import Home5 from "./components/BT5/Home5";
// import Home6 from "./components/BT6/Home6";
// import Home7 from "./components/BT7/Home7";
// import Home8 from "./components/BT8/Home8";
// import Home9 from "./components/BT9/Home9";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Admin from "./layout/Admin";
import UserManager from "./pages/UserManager";
import ProtectedRoute from "./pages/ProtectedRoute";
import ProductManager from "./pages/ProductManager";
import "./App.css";
import Order from "./pages/Order";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/about",
      element: <About></About>,
    },
    {
      path: "/contact",
      element: <Contact></Contact>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/admin",
      element: <ProtectedRoute element = {<Admin></Admin>}></ProtectedRoute>,
      children: [
        {
          path: "user",
          element: <UserManager></UserManager>,
        },
        {
          path: "product",
          element: <ProductManager></ProductManager>,
        },
        {
          path: "order",
          element: <Order></Order>,
        },
        {
          path: "product/:id",
          element: <ProductDetail></ProductDetail>,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);
  return (
    <div>
      {/* <Home1></Home1> */}
      {/* <Home2></Home2> */}
      {/* <Home3></Home3> */}
      {/* <Home4></Home4> */}
      {/* <Home5></Home5> */}
      {/* <Home6></Home6> */}
      {/* <Home7></Home7> */}
      {/* <Home8></Home8> */}
      {/* <Home9></Home9> */}
      Router
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}
