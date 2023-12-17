import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';
import images from '../images'; // Adjust the path accordingly

export default function ImageCarousel() {
  const settings = {
    dots: true, // Set to true to show dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 2000,   // Set the autoplay speed in milliseconds (e.g., 2000ms = 2 seconds)
  };

  const blockStyles = {
    display: 'block',
    height: '300px', // Set a custom height for your images
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
  

  
