import {createBrowserRouter,} from "react-router-dom";
import Home from './../Components/Home';



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
  ]);