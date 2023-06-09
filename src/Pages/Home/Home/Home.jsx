import { useState } from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import './Home.css';

const Home = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={isDarkTheme ? 'dark' : 'light'}>
            
            <Banner></Banner>
            <button onClick={toggleTheme} className="theme-toggle btn btn-outline btn-warning w-14">
                {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
            </button>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;
