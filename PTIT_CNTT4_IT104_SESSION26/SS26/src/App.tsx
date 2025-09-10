import React from "react";
// import Product from "./pages/Product";
// import ProductDetail from "./components/BT1/ProductDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Teams from "./components/BT7/Teams"; 
import TeamsIndex from "./components/BT7/TeamsIndex";
import Team from "./components/BT7/Team";
// import Student from "./components/BT2/Student";
// import StudentDetail from "./pages/StudentDetail";
// import Login from "./components/BT5/Login";
// import Account from "./components/BT5/Account";
// import PrivateRouter from "./components/BT5/PrivateRouter";
export default function App() {
  const routers = createBrowserRouter([
    // {
    //   path: "/product",
    //   element: <Product></Product>,
    // },
    // {
    //   path: "/product/:id",
    //   element: <ProductDetail></ProductDetail>,
    // },
    // {
    //   path: "/student",
    //   element: <Student></Student>,
    // },
    // {
    //   path: "/student/:name",
    //   element: <StudentDetail></StudentDetail>,
    // },
    // {
    //   path: "/login",
    //   element: <Login></Login>,
    // },
    // {
    //   path: "/account",
    //   element: <PrivateRouter element = {<Account></Account>}></PrivateRouter>,
    // },
    {
      path: "/teams",
      element: <Teams />,
      children: [
        {
          index: true, 
          element: <TeamsIndex />,
        },
        {
          path: ":teamId", 
          element: <Team />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}
