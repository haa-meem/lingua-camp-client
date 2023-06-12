import { useEffect, useState } from 'react';

const MyClasses = () => {
    const [classData, setClassData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/addClass')
            .then(response => response.json())
            .then(data => setClassData(data))
            .catch(error => console.log(error));
    }, []);

    if (!classData) {
        return <p>Loading class data...</p>;
    }

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
                        <p className='text-warning'>Status: {classItem.status}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyClasses;
