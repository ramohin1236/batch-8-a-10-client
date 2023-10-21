import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const updateCar = useLoaderData()
    const {_id,productName,productBrand,productType,productPrice,productDescription,productRatings,productURL1,productURL2,productURL3,productURL4} =updateCar
    console.log(updateCar)

    const handleBrandUpdateSubmit=(e)=>{
        e.preventDefault()
        const form= e.target;
        const productName = form.productName.value;
        const productBrand = form.brand.value;
        const productType = form.type.value;
        const productPrice = form.price.value;
        const productDescription = form.description.value;
        const productRatings = form.ratings.value;
        const productURL1 = form.photo1.value;
        const productURL2 = form.photo2.value;
        const productURL3 = form.photo3.value;
        const productURL4 = form.photo4.value;
 
        const updateBrand ={productName,productBrand,productType,productPrice,productDescription,productRatings,productURL1,productURL2,productURL3,productURL4}
 
      console.log(updateBrand)
 
 
      fetch(`https://my-server-mnmquxk6n-ramohin1236.vercel.app/brand/${_id}`,{
         method:'PUT',
         headers: {
             'content-type' : 'application/json'
         },
         body: JSON.stringify(updateBrand)
      })
      .then(res=>res.json())
      .then(data=>{
         console.log(data);
         if(data.modifiedCount > 0){
             Swal.fire({
                icon: "success",
                 title: 'Brand Product Update Successfully!',
                 showClass: {
                   popup: 'animate__animated animate__fadeInDown'
                 },
                 hideClass: {
                   popup: 'animate__animated animate__fadeOutUp'
                 }
               })
         }
         form.reset()
       
      })
 
     }

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-20 mb-8">Update brand Product</h2>
        <form  className="container mx-auto p-6" onSubmit={handleBrandUpdateSubmit}>
              <div>
            {/* name and brand input here */}
            <div className="md:flex justify-evenly max-sm:ml-4 max-sm:mr-4 ">
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>Product</span>
                            <input type="text" 
                            name="productName"
                            defaultValue= {productName}
                            placeholder="Name here..." className="input input-bordered lg:w-96" />
                        </label>
                    </div>
                </div>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>Brand</span>
                            <input type="text" 
                            name="brand"
                            defaultValue={productBrand}
                            placeholder="Brand here..." className="input input-bordered lg:w-96" />
                        </label>
                    </div>
                </div>
            </div>
            {/* price and brand type here */}
            <div className="md:flex justify-evenly max-sm:ml-4 max-sm:mr-4 ">
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>Type</span>
                            <input type="text" 
                            name="type"
                            defaultValue={productType}
                            placeholder="Product type..." className="input input-bordered lg:w-96" />
                        </label>
                    </div>
                </div>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>BDT</span>
                            <input type="text"
                            defaultValue={productPrice}
                            name="price"
                            placeholder="Enter product Price..." className="input input-bordered lg:w-96" />
                        </label>
                    </div>
                </div>
            </div>
            {/* short description and ratinngs here */}
            <div className="md:flex justify-evenly max-sm:ml-4 max-sm:mr-4 ">
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Description</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>Description</span>
                            <input type="text" 
                            defaultValue={productDescription}
                            name="description"
                            placeholder="Product cescription..." className="input input-bordered lg:w-96" />
                        </label>
                    </div>
                </div>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Ratings</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>Ratings</span>
                            <input type="text" 
                            name="ratings"
                            defaultValue={productRatings}
                            placeholder="Enter product Ratings..." className="input input-bordered lg:w-96" />
                        </label>
                    </div>
                </div>
            </div>
            {/* Phot URL here */}
            <div className="md:flex justify-evenly max-sm:ml-4 max-sm:mr-4 ">
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-1</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>URL-1</span>
                            <input type="text" 
                            name="photo1"
                            defaultValue={productURL1}
                            placeholder="Product picture..." className="input input-bordered lg:w-96" />
                        </label>
                    </div>
                </div>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-2</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>URL-2</span>
                            <input type="text" 
                              name="photo2"
                              defaultValue={productURL2}
                            placeholder="Enter product Ratings..." className="input input-bordered lg:w-96" />
                        </label>
                    </div>
                </div>
              
            </div>
            <div>
                   <div className="md:flex justify-evenly max-sm:ml-4 max-sm:mr-4">
                   <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-3</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>URL-3</span>
                            <input type="text" 
                             name="photo3"
                             defaultValue={productURL3}
                            placeholder="Enter product Ratings..." className="input input-bordered lg:w-96" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-4</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>URL-4</span>
                            <input type="text" 
                             name="photo4"
                             defaultValue={productURL4}
                            placeholder="Enter product Ratings..." className="input input-bordered lg:w-96" />
                        </label>
                    </div>
                   </div>
                </div>
        </div>
     <div className="text-center mt-10">
     <input className="w-96  btn btn-outline" type="submit" value="Update" />
     </div>
         </form>
        </div>
    );
};

export default Update;