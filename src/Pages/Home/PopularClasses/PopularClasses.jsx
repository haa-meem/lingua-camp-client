import { useEffect, useState } from 'react';

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('classes.json')
            .then((res) => res.json())
            .then((data) => setClasses(data));
    }, []);

    return (
        <>
            <h1 className="text-center font-bold text-5xl my-3">Popular Classes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3 text-[#1F2937]">
                {classes.map((classItem) => (
                    <div className="card w-full bg-base-100 shadow-xl" key={classItem.id}>
                        <figure className="px-10 pt-10">
                            <img src={classItem.image} alt={classItem.title} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{classItem.title}</h2>
                            <p>{classItem.description}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PopularClasses;