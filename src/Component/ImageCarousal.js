import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';
import images from '../images'; 

export default function ImageCarousel() {
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 2000,   
  };

  const blockStyles = {
    display: 'block',
    height: '300px', 
  };


  return (
    <div className='carousel-section'>
      <Slider {...settings} className="carousel">
        {images.map((image) => (
          <div key={image.id} className="carousel-item">
            <img style={blockStyles} src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
  

  
