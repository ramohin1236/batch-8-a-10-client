import { Link } from "react-router-dom";
import img from "/afa.jpg"

const InitialPage = () => {
    return (
        <div className="hero min-h-screen" >
          <img className="w-full max-h-screen" src={img} alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-yellow-300">Automotive Motors</h1>
            <p className="mb-5 text-lg">As a part of our community,  have access to exclusive events, product launches, 
Explore our website to discover our latest models, learn about our history, and get in touch with our passionate team. Welcome to the world of AUTOMOTIVE MOTORS where every drive is an adventure, and every vehicle is a masterpiece.

Start your journey today!</p>
           <Link to='/layout'>
           <button className="btn btn-primary">Let's Have a journey</button>
           </Link>
       
          </div>
        </div>
      </div>
    );
};

export default InitialPage;