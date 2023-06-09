import { useEffect, useState } from 'react';

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('instructors.json')
      .then(res => res.json())
      .then(data => setInstructors(data.slice(0, 6)))
  }, [])

  return (
    <>
      <h1 className="text-center font-bold text-5xl my-3">Popular Instructors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3 text-[#1F2937]">
        {instructors.map((instructor) => (
          <div className="card w-full bg-base-100 shadow-xl rounded-full" key={instructor.id}>
            <figure className="w-24 mx-auto mt-5">
              <img src={instructor.image} alt={instructor.name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{instructor.name}</h2>
              <p>{instructor.teaching}</p>
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

export default PopularInstructors;
