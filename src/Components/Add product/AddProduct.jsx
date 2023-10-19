import Swal from "sweetalert2";


const AddProduct = () => {
// add producct
    const handleSubmit=(e)=>{
       e.preventDefault()
       const form= e.target;
       const productName = form.productName.value;
       const productBrand = form.brand.value;

       const productURL1 = form.photo1.value;
     

       const info ={productName,productBrand,productURL1}

     console.log(info)


     fetch('http://localhost:5000/product',{
        method:'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(info)
     })
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Product Successfully Added!',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }
      
     })

    }

    // add brand product
    const handleBrandSubmit=(e)=>{
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
 
        const info ={productName,productBrand,productType,productPrice,productDescription,productRatings,productURL1,productURL2,productURL3,productURL4}
 
      console.log(info)
 
 
      fetch('http://localhost:5000/brand',{
         method:'POST',
         headers: {
             'content-type' : 'application/json'
         },
         body: JSON.stringify(info)
      })
      .then(res=>res.json())
      .then(data=>{
         console.log(data);
         if(data.insertedId){
             Swal.fire({
                icon: "success",
                 title: 'Brand Product Successfully Added!',
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
     <div className="bg-slate-100">
        <h1 className="text-4xl font-bold text-center mt-8 mb-8">Service Product Added </h1>
         <form  className="container mx-auto p-6" onSubmit={handleSubmit}>
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
                            placeholder="Brand here..." className="input input-bordered lg:w-96" />
                        </label>
                    </div>
                </div>
            </div>
            
           
            {/* Phot URL here */}
            <div className=" max-sm:ml-4 max-sm:mr-4 w-full">
                <div>
                    <div className="form-control md:ml-28 lg:ml-52">
                        <label className="label">
                            <span className="label-text">Photo-1</span>
                        </label>
                        <label className="input-group input-group-vertical md:w-[500px] lg:w-[700px]">
                            <span>URL-1</span>
                            <input type="text" 
                            name="photo1"
                            placeholder="Product picture..." className="input input-bordered md:w-[500px] lg:w-[700px] " />
                        </label>
                    </div>
                </div>
                <div>
                   
                </div>
              
            </div>
            
        </div>
     <div className="text-center mt-10">
     <input className="w-96  btn btn-outline" type="submit" value="submit" />
     </div>
         </form>


         

        <h2 className="text-4xl font-bold text-center mt-20 mb-8">Add brand Product</h2>
        <form  className="container mx-auto p-6" onSubmit={handleBrandSubmit}>
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
                            placeholder="Enter product Ratings..." className="input input-bordered lg:w-96" />
                        </label>
                    </div>
                   </div>
                </div>
        </div>
     <div className="text-center mt-10">
     <input className="w-96  btn btn-outline" type="submit" value="submit" />
     </div>
         </form>
     </div>
    );
};

export default AddProduct;