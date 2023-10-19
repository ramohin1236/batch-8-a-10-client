import PropTypes from 'prop-types';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from 'aos';

const Cart = ({signleP}) => {
    const {productName,productBrand,productURL1}=signleP;
    useEffect(()=>{
        Aos.init({duration: 1000});
        },[])  
    
    return (
      <Link to={`/layout/${productBrand}`}>
        <div  data-aos="zoom-in" className="card card-compact w-96 bg-base-100 shadow-xl ">
  <figure><img className='w-full h-64' src={productURL1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{productName}</h2>
    <p>{productBrand}</p>
    
  </div>
</div>
      </Link>
    );
};

Cart.propTypes = {
signleP : PropTypes.object
}

export default Cart;