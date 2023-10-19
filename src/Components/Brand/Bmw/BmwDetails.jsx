import { useLoaderData } from "react-router-dom";


const BmwDetails = () => {

    const data= useLoaderData()
    console.log(data);

    

    return (
        <div className="mt-44 mb-44">
        {data._id}      
        </div>
    );
};

export default BmwDetails;