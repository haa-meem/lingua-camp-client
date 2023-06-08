import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import banner1 from '../../../assets/banner1.jpg';
import banner2 from '../../../assets/banner2.jpg';
import banner3 from '../../../assets/banner3.jpg';
import banner4 from '../../../assets/banner4.jpg';

const Banner = () => {
  return (
    <div className='w-11/12 mx-auto mb-12'>
      <AwesomeSlider animation="cubeAnimation">
        <div data-src={banner1} />
        <div data-src={banner2} />
        <div data-src={banner3} />
        <div data-src={banner4} />
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
