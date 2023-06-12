import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useEnroll from '../../../Hooks/useEnroll';

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    // const {_id,title,image,description}=classItem;
    const { user } = useContext(AuthContext);
    const [, refetch] = useEnroll();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetch('https://lingua-camp-server.vercel.app/classes')
            .then((res) => res.json())
            .then((data) => setClasses(data));
    }, []);

    const handleAddToClasses = classItem => {
        console.log(classItem);
        if (user && user.email) {
            const selectedClasses = { classId: classItem._id, classTitle: classItem.title, classImage: classItem.image, classDescription: classItem.description, classAvailable: classItem.availableSeats, classPrice: classItem.price, email: user.email }
            fetch('https://lingua-camp-server.vercel.app/selectedClasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClasses)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your class added on the Classes',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to Enroll in this Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            })
        }
    }

    return (
        <>
            <h1 className="text-center font-bold text-5xl my-3">Popular Classes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3 text-[#1F2937]">
                {classes.map((classItem) => (
                    <div className="card w-full bg-base-100 shadow-xl" key={classItem._id}>
                        <figure className="px-10 pt-10">
                            <img src={classItem.image} alt={classItem.title} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{classItem.title}</h2>
                            <p>{classItem.description}</p>
                            <p className="font-semibold">Available Seats: <span className='text-green-600'>{classItem.availableSeats}</span></p>
                            <p className="font-semibold">Course Price: <span className='text-orange-400'>${classItem.price}</span></p>
                            <div className="card-actions">
                                <button onClick={() => handleAddToClasses(classItem)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-3">Enroll Here</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PopularClasses;