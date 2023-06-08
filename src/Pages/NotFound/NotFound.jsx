import { Link } from 'react-router-dom';
import img404 from '../../assets/404-snow.gif';

const NotFound = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={img404} alt="" />
            <p className='text-red-500 font-bold text-xl my-3'>You are in a wrong page.</p>
            <Link to="/"><button className="btn btn-outline btn-success">Back to Home</button></Link>
        </div>
    );
};

export default NotFound;