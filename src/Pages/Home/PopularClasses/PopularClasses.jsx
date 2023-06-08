import pic1 from "../../../assets/pic1.jpg"
import pic2 from "../../../assets/pic2.jpg"
import pic3 from "../../../assets/pic3.jpg"
import pic4 from "../../../assets/pic4.jpg"
import pic5 from "../../../assets/pic5.jpg"
import pic6 from "../../../assets/pic6.jpg"

const PopularClasses = () => {
    return (
        <>
            <h1 className='text-center font-bold text-5xl my-3'>Popular Classes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3">
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-3 pt-3">
                        <img src={pic1} alt="Spanish Language Class" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Spanish Language Class</h2>
                        <p>This class focuses on teaching students the fundamentals of the Spanish language through interactive activities, conversations, and cultural exploration.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-3 pt-3">
                        <img src={pic2} alt="French Language Class" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">French Language Class</h2>
                        <p>In this class, students will immerse themselves in the beauty of the French language. They will learn vocabulary, grammar, and pronunciation while exploring French culture and traditions.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-3 pt-3">
                        <img src={pic3} alt="German Language Class" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">German Language Class</h2>
                        <p>Join our German Language Class to dive into the intricacies of the German language. Students will develop their speaking, reading, and writing skills while engaging in fun and engaging activities.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-3 pt-3">
                        <img src={pic4} alt="Chinese Language Class" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Chinese Language Class</h2>
                        <p>Discover the wonders of the Chinese language and its rich cultural heritage. This class will introduce students to Chinese characters, basic conversational skills, and traditional customs.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-3 pt-3">
                        <img src={pic5} alt="Japanese Language Class" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Japanese Language Class</h2>
                        <p>Immerse yourself in the captivating world of Japanese language and culture. Students will learn the fundamentals of Japanese, including hiragana, katakana, kanji, and essential phrases.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-3 pt-3">
                        <img src={pic6} alt="Italian Language Class" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Italian Language Class</h2>
                        <p>Embark on a linguistic and culinary journey through Italy. This class will teach students the basics of Italian grammar, vocabulary, and pronunciation, while also exploring the delightful flavors of Italian cuisine.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularClasses;