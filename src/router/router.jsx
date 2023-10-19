import {createBrowserRouter,} from "react-router-dom";
import Home from './../Components/Home';
import InitialPage from "../Components/Initial/InitialPage";
import LayOut from "../Components/Layout/LayOut";
import AddProduct from "../Components/Add product/AddProduct";
import Mycart from "../Components/Mycart/Mycart";
import Login from "../Components/Login/Login";
import Bmw from "../Components/Brand/Bmw/Bmw";
import Tesla from "../Components/Brand/Tesla/Tesla";
import Toyota from "../Components/Brand/Toyota/Toyota";
import Marcedes from "../Components/Brand/Marcedes/Marcedes";
import Yamaha from "../Components/Brand/Yamaha/Yamaha";
import Honda from "../Components/Brand/Honda/Honda";
import BmwDetails from "../Components/Brand/Bmw/BmwDetails";



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
        {
            path: "/layout/BMW",
            element:<Bmw/>,
            loader: ()=>fetch("http://localhost:5000/brand")
        },
        {
            path: "/layout/BMW/:id",
            element:<BmwDetails/>,
            loader: ({params})=>fetch(`http://localhost:5000/layout/bmw/${params.id}`)
        },
        {
            path: "/layout/tesla",
            element:<Tesla/>
        },
        {
            path: "/layout/TOYOYTA",
            element:<Toyota/>,
            loader: ()=>fetch("http://localhost:5000/brand")
        },
        {
            path: "/layout/TOYOYTA/:id",
            element:<Toyota/>,
            loader: ({params})=>fetch(`http://localhost:5000/layout/TOYOYTA/${params.id}`)
        },
        {
            path: "/layout/MERCEDES-BENZ",
            element:<Marcedes/>
        },
        {
            path: "/layout/yamaha",
            element:<Yamaha/>
        },
        {
            path: "/layout/honda",
            element:<Honda/>
        },
      ]
    },
  ]);