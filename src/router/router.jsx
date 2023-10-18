import {createBrowserRouter,} from "react-router-dom";
import Home from './../Components/Home';
import InitialPage from "../Components/Initial/InitialPage";
import LayOut from "../Components/Layout/LayOut";
import AddProduct from "../Components/Add product/AddProduct";
import Mycart from "../Components/Mycart/Mycart";
import Login from "../Components/Login/Login";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <InitialPage/>,
    },
    {
      path: "/layout",
      element: <LayOut/>,
      children:[
        {
            path: "/layout",
            element:<Home/>
           
        },
        {
            path: "/layout/add",
            element:<AddProduct/>
        },
        {
            path: "/layout/cart",
            element:<Mycart/>
        },
        {
            path: "/layout/login",
            element:<Login/>
        },
      ]
    },
  ]);