import Product from "./Product/Product";


const Home = () => {
    return (
        <div>
            <div>
            <div className="hero" style={{backgroundImage: 'url()'}}>
                    <img className="h-[500px] w-full" src="/public/logo.jpg" alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to our Automotive Motors</h1>
      
    </div>
  </div>
</div>
            </div>
           <div>
           <Product/>
           </div>


           <div className="mt-32 text-center mb-24 container mx-auto">
            <p className="mb-5 text-5xl font-bold">Why Choose Us</p>

            <div className="collapse collapse-arrow bg-base-200 mb-6">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
   Our Brands
  </div>
  <div className="collapse-content"> 
    <p>This is our unique brand all over the world.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 mb-6">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Have any service?
  </div>
  <div className="collapse-content"> 
    <p>Yes, our have special team for yours</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Price
  </div>
  <div className="collapse-content"> 
    <p>Come to our automotive and save your money</p>
  </div>
</div>
           </div>
        </div>
    );
};

export default Home;