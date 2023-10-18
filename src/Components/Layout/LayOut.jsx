import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";


const LayOut = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default LayOut;