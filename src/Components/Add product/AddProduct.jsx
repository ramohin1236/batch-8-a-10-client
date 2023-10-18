

const AddProduct = () => {
    return (
     <div className="bg-slate-100">
           <div className="container mx-auto p-16">
            {/* name and brand input here */}
            <div className="md:flex justify-evenly max-sm:ml-4 max-sm:mr-4 ">
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>Product</span>
                            <input type="text" placeholder="Name here..." className="input input-bordered lg:w-96" />
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
                            <input type="text" placeholder="Brand here..." className="input input-bordered lg:w-96" />
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
                            <input type="text" placeholder="Product type..." className="input input-bordered lg:w-96" />
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
                            <input type="text" placeholder="Enter product Price..." className="input input-bordered lg:w-96" />
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
                            <input type="text" placeholder="Product cescription..." className="input input-bordered lg:w-96" />
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
                            <input type="text" placeholder="Enter product Ratings..." className="input input-bordered lg:w-96" />
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
                            <input type="text" placeholder="Product picture..." className="input input-bordered lg:w-96" />
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
                            <input type="text" placeholder="Enter product Ratings..." className="input input-bordered lg:w-96" />
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
                            <input type="text" placeholder="Enter product Ratings..." className="input input-bordered lg:w-96" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-4</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>URL-4</span>
                            <input type="text" placeholder="Enter product Ratings..." className="input input-bordered lg:w-96" />
                        </label>
                    </div>
                   </div>
                </div>
        </div>
     </div>
    );
};

export default AddProduct;