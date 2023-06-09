import person1 from "../../../assets/person1.png"
import person2 from "../../../assets/person2.png"
import person3 from "../../../assets/person3.png"
import person4 from "../../../assets/person4.png"
import person5 from "../../../assets/person5.png"
import person6 from "../../../assets/person6.png"

const PopularInstructors = () => {
    return (
        <>
            <h1 className='text-center font-bold text-5xl my-3'>Popular Instructors</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3">
                <div className="card w-full bg-base-100 shadow-xl rounded-full">
                    <figure className="w-24 mx-auto mt-5">
                        <img src={person1} alt="Instructor 1" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Instructor 1</h2>
                        <p>Teaching Spanish</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl rounded-full">
                    <figure className="w-24 mx-auto mt-5">
                        <img src={person2} alt="Instructor 2" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Instructor 2</h2>
                        <p>Teaching French</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl rounded-full">
                    <figure className="w-24 mx-auto mt-5">
                        <img src={person3} alt="Instructor 3" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Instructor 3</h2>
                        <p>Teaching German</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl rounded-full">
                    <figure className="w-24 mx-auto mt-5">
                        <img src={person4} alt="Instructor 4" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Instructor 4</h2>
                        <p>Teaching Chinese</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl rounded-full">
                    <figure className="w-24 mx-auto mt-5">
                        <img src={person5} alt="Instructor 5" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Instructor 5</h2>
                        <p>Teaching Arabic</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl rounded-full">
                    <figure className="w-24 mx-auto mt-5">
                        <img src={person6} alt="Instructor 6" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Instructor 6</h2>
                        <p>Teaching Polish</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default PopularInstructors;