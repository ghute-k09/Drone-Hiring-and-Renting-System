import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
//! Adding the aboutUs page in the slide.js -->> considering it as home page for now
import AboutUs from './AboutUs';
import ContactUs1 from './ContactUs1';

import image1 from "../image/drone.jpg";
import image from "../image/Drone2a.jpg";
import image2 from "../image/Drone1a.jpg";
import image4 from "../image/Drone2a.jpg";
import image5 from "../image/drone1.jpg";
import Footer from '../Footer';



import "./Slide.css";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div > 
      <Carousel interval={1500} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
          <img className="" src={image1} alt="First slide" style={{maxWidth:'40%'}} />
        </Carousel.Item>


        
        <Carousel.Item>
          <img className="" src={image} alt="First slide" style={{maxWidth:'40%'}} />
        </Carousel.Item>

        <Carousel.Item>
          <img className="" src={image2} alt="Second slide" style={{maxWidth:'48%'}} />
        </Carousel.Item>

        <Carousel.Item>
          <img className="" src={image4} alt="Fourth slide" style={{maxWidth:'40%'}} />
        </Carousel.Item>

        <Carousel.Item>
          <img className="" src={image5} alt="Fifth slide" style={{maxWidth:'40%'}} />
        </Carousel.Item>
      </Carousel>

     
      <br/>
     
      <AboutUs/>
      <ContactUs1/>
      <Footer/>
    </div>
  
  );
};
export default Slider;