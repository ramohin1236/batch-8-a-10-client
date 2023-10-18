import {createBrowserRouter,} from "react-router-dom";
import Home from './../Components/Home';
import InitialPage from "../Components/Initial/InitialPage";
import LayOut from "../Components/Layout/LayOut";



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
        }
      ]
    },
  ]);