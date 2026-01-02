import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Product";
import Slider from "./Slider";
import Sales from "./Sales";
import Timer from "./Timer";
import Services from "./Services";
import Instagram from "./Instagram";
import Footer from "./Footer";
import Contact from "./Contact";
import Blog from "./Blog";
import Shoping from "./Shoping";
import Productdetail from "./Productdetail";
import Header from "./Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import UserData from "../UserData";

function App() {

  let router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/Shoping",
          element:<Shoping/>
        },
        {
          path:"/Blog",
          element:<Blog/>
        },
        {
          path:"/Contact",
          element:<Contact/>
        },
        {
          path:"/productdetail/:id",
          element:<Productdetail/>
        },
        {
          path:"/Payment",
          element:<UserData/>
        }
      ]

    }
  ])



  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
    </>
  );
}

export default App;
