import { Carousel } from "flowbite-react";
import Slide1 from '../assets/hero-bg.jpg';
import Slide2 from '../assets/hero-bg2.jpg';
import Slide3 from '../assets/hero-bg3.jpg';
import Slide4 from '../assets/hero-bg4.jpg'

const HeroSection = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="h-56 sm:h-64 xl:h-[520px] 2xl:h-96">
        <Carousel>
          <img
            src={Slide1}
            alt="..."
          />
          <img
            src={Slide2}
            alt="..."
          />
          <img
            src={Slide3}
            alt="..."
          />
          <img
            src={Slide4}
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
