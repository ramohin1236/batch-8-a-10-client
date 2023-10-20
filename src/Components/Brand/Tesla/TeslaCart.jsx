import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const TeslaCart = ({tesla}) => {
    const{_id,productName,productURL1,productRatings,productDescription} = tesla
    return (
        <div>
        {/* <h1>Brands:{productBrand}</h1> */}
         <div className="card card-side bg-slate-200 shadow-xl ">
  <figure><img className="sm:w-44 md:w-[450px] " src={productURL1} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{productName}</h2>
   <div className="flex gap-4">
   <div>
    <p>{productRatings} </p>
    </div>


    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
   </div>
 <h2 className=''>{
 productDescription.length > 100 ? productDescription.slice(0,250) : productDescription
}</h2>
    <div className="card-actions justify-end">
   <Link to={`/layout/tesla/${_id}`}>
   <button className="btn btn-outline fa-solid fa-eye"></button>
   </Link>
    </div>
  </div>
</div>
       </div>
    );
};






TeslaCart.propTypes = {
tesla : PropTypes.object
     }
 
export default TeslaCart;