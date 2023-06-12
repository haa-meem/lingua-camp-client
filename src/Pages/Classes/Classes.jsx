import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useEnroll from '../../Hooks/useEnroll';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';

const Classes = () => {
    const [classData, setClassData] = useState(null);
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [, refetch] = useEnroll();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetch('https://lingua-camp-server.vercel.app/addClass')
            .then(response => response.json())
            .then(data => setClassData(data))
            .catch(error => console.log(error));
    }, []);

    if (!classData) {
        return <p>Loading class data...</p>;
    }

    const handleSelectClasses = classItem => {
        console.log(classItem);
        if (user && user.email) {
            const selectedClasses = {
                classId: classItem._id,
                classTitle: classItem.className,
                classImage: classItem.classImage,
                classDescription: classItem.description,
                classAvailable: classItem.availableSeats,
                classPrice: parseInt(classItem.price),
                email: user.email
            };
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
                        });
                    }
                });
        } else {
            Swal.fire({
                title: 'Please Login to Enroll in this Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then(result => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div>
            {classData.map((classItem, index) => (
                <div className="card w-96 bg-base-100 shadow-xl" key={index}>
                    <figure className="px-10 pt-10">
                        <img src={classItem.classImage} alt={classItem.className} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{classItem.className}</h2>
                        <p>Instructor: {classItem.instructorName}</p>
                        <p>Email: {classItem.instructorEmail}</p>
                        <p>Available Seats: {classItem.availableSeats}</p>
                        <p>Price: {classItem.price}</p>
                        <p className="text-warning">Status: {classItem.status}</p>
                        <button
                            onClick={() => handleSelectClasses(classItem)}
                            className="btn btn-primary"
                            disabled={classItem.availableSeats === 0 || isAdmin || isInstructor}
                        >
                            Select
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Classes;
