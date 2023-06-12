import pic1 from '../../../assets/EasytoLearn.png'
import pic2 from '../../../assets/AgeDoesntMatter.jpg'

const WeProvide = () => {
    return (
        <div className='mt-3'>
            <div className="hero h-[50%] bg-base-200" data-aos="fade-up">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={pic1} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Learn a Language This Summer!</h1>
                        <p className="py-6">Join our Language Learning Summer Camp and expand your horizons. Discover new cultures and gain valuable language skills. Our immersive programs make learning easy and enjoyable.</p>
                        <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-3">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="hero h-[50%] bg-base-200" data-aos="fade-up" data-aos-delay="300">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={pic2} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Language Learning for All Ages!</h1>
                        <p className="py-6">Language learning knows no age limits. Whether you're a child, teenager, or adult, our summer camp provides tailored language programs suitable for learners of all ages. Start your language journey today!</p>
                        <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-3">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeProvide;