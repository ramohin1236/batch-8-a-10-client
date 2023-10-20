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
import Registration from "../Components/Login/Registration";
import Privateroute from "./Privateroute";
import TeslaDetails from "../Components/Brand/Tesla/TeslaDetails";
import MarcedesDetails from "../Components/Brand/Marcedes/MarcedesDetails";
import ToyotaDetails from './../Components/Brand/Toyota/ToyotaDetails';
import HondaDetails from "../Components/Brand/Honda/HondaDetails";
import YamahaDetails from "../Components/Brand/Yamaha/YamahaDetails";
import ErrorPage from "../Components/Error/ErrorPage";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <InitialPage/>,
    },
    {
      path: "/layout",
      element: <LayOut/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path: "/layout",
            element:<Home/>
           
        },
        {
            path: "/layout/add",
            element:<Privateroute><AddProduct/></Privateroute>
        },
        {
            path: "/layout/cart",
            element:<Privateroute><Mycart/></Privateroute>,
            loader: ()=>fetch('http://localhost:5000/buycar')
        },
        {
            path: "/layout/login",
            element:<Login/>
        },
        {
            path: "/layout/rgs",
            element:<Registration/>
        },
        {
            path: "/layout/BMW",
            element:<Privateroute><Bmw/></Privateroute>,
            loader: ()=>fetch("http://localhost:5000/brand")
        },
        {
            path: "/layout/BMW/:id",
            element:<Privateroute><BmwDetails/></Privateroute>,
            loader: ({params})=>fetch(`http://localhost:5000/layout/bmw/${params.id}`)
        },
        {
            path: "/layout/tesla",
            element:<Privateroute><Tesla/></Privateroute>,
            loader: ()=>fetch("http://localhost:5000/brand")
        },
        {
            path: "/layout/tesla/:id",
            element:<Privateroute><TeslaDetails/></Privateroute>,
            loader: ({params})=>fetch(`http://localhost:5000/layout/tesla/${params.id}`)
        },
        {
            path: "/layout/TOYOYTA",
            element:<Privateroute><Toyota/></Privateroute>,
            loader: ()=>fetch("http://localhost:5000/brand")
        },
        {
            path: "/layout/TOYOYTA/:id",
            element:<Privateroute><ToyotaDetails/></Privateroute>,
            loader: ({params})=>fetch(`http://localhost:5000/layout/TOYOYTA/${params.id}`)
        },
        {
            path: "/layout/MERCEDES-BENZ",
            element:<Privateroute><Marcedes/></Privateroute>,
            loader: ()=>fetch("http://localhost:5000/brand")
        },
        {
            path: "/layout/mar/:id",
            element:<Privateroute><MarcedesDetails/></Privateroute>,
            loader: ({params})=>fetch(`http://localhost:5000/layout/mar/${params.id}`)
        },
        {
            path: "/layout/yamaha",
            element:<Privateroute><Yamaha/></Privateroute>,
            loader: ()=>fetch("http://localhost:5000/brand")

        },
        {
            path: "/layout/yamaha/:id",
            element:<Privateroute><YamahaDetails/></Privateroute>,
            loader: ({params})=>fetch(`http://localhost:5000/layout/yamaha/${params.id}`)
        },
        {
            path: "/layout/honda",
            element:<Privateroute><Honda/></Privateroute>,
            loader: ()=>fetch("http://localhost:5000/brand")
        },
        {
            path: "/layout/honda/:id",
            element:<Privateroute><HondaDetails/></Privateroute>,
            loader: ({params})=>fetch(`http://localhost:5000/layout/bmw/${params.id}`)
        },
      ]
    },
  ]);