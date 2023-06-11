import { useEffect, useState } from 'react';

const MyEnrolledClasses = () => {
  const [enrolled, setEnrolled] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/payments')
      .then(res => res.json())
      .then(data => setEnrolled(data))
  }, [])

  return (
    <>
      <h1 className="text-center font-bold text-5xl my-3">My Enrolled Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3 text-[#1F2937]">
        {enrolled.map((item) => (
          <div className="card w-full bg-base-100 shadow-xl rounded-full" key={item._id}>
            {/* <figure className="w-24 mx-auto mt-5">
              <img src={item.image} alt={item.name} className="rounded-xl" />
            </figure> */}
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.classNames.map(className => <p key={className.id}>{className}</p>)}</h2>
              <p>Total Price: ${item.price}</p>
              <div className="card-actions">
                <button className="btn btn-outline">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyEnrolledClasses;
