import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/BT6/Home";
// import NotFound from "./components/BT7/NotFound";
// import About from "./components/BT7/About";
import Home8 from "./components/BT8/Home8";
// import BlogLayout from "./components/BT5/BlogLayout";
// import Posts from "./components/BT5/Posts";
// import PostDetail from "./components/BT5/PostDetail";
// import ProductList from "./components/BT4/ProductList";
// import TaskList from "./components/BT3/TaskList";
// import TaskDetail from "./components/BT3/TaskDetail";
// import ProductList from "./components/BT2/ProductList";
// import ProductDetail from "./components/BT2/ProductDetail";
// import Ex2 from "./components/BT2/Ex2";
// import Home from "./components/BT1/Home";
// import About from "./components/BT1/About";
// import Contact from "./components/BT1/Contact";
// import Ex1 from "./components/BT1/Ex1";
// import Home6 from "./components/BT6/Home6";

export default function App() {
  const routers = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Ex1></Ex1>,
    //   children: [
    //     {
    //       index:true,
    //       element: <Home></Home>,
    //     },
    //     {
    //       path: "about",
    //       element: <About></About>,
    //     },
    //     {
    //       path: "contact",
    //       element: <Contact></Contact>,
    //     },
    //   ],
    // },
    // {
    //   path: "/",
    //   element: <Ex2></Ex2>,
    //   children: [
    //     {
    //       path: "products",
    //       element: <ProductList></ProductList>,
    //     },
    //     {
    //       path: "products/:id",
    //       element: <ProductDetail></ProductDetail>,
    //     },
    //   ],
    // },
    // {
    //   path: "/",
    //   element: <TaskList />,
    // },
    // {
    //   path: "task/:id",
    //   element: <TaskDetail />,
    // },
    // {
    //   path:"/products",
    //   element:<ProductList></ProductList>
    // },
    // {
    //   path: "/blog",
    //   element: <BlogLayout></BlogLayout>,
    //   children: [
    //     {
    //       path: "posts",
    //       element: <Posts></Posts>,
    //     },
    //     {
    //       path: "posts/:id",
    //       element: <PostDetail></PostDetail>,
    //     },
    //   ],
    // },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      {/* <Home6></Home6> */}
      <Home8></Home8>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}
