import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cart = ({signleP}) => {
    const {productName,productBrand,productURL1}=signleP
    return (
      <Link>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
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