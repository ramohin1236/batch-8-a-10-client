import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
               <h1 className='text-4xl'>404!</h1>
            <p className='text-4xl'>Routes not found.</p>
            <Link
            to='/layout'
            >
                <button className='btn btn-outline mt-6'>Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;