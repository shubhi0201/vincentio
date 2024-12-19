import React from "react";
import Slider from "react-slick";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.png";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import "./cardCarousel.css";

function CardCarousel() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjusted for smoother auto transition
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
  };

  const images = [
    {
      src: image1,
      heading: "Beautiful Landscape",
      description: "A scenic view of a stunning natural landscape.",
      link: "#",
    },
    {
      src: image2,
      heading: "City Skyline",
      description: "A breathtaking view of the modern city skyline.",
      link: "#",
    },
    {
      src: image3,
      heading: "Beach Scenery",
      description: "Relax and unwind at this peaceful beach.",
      link: "#",
    },
    {
      src: image4,
      heading: "Sunset Colors",
      description: "Enjoy vibrant sunset colors over the horizon.",
      link: "#",
    },
    {
      src: image5,
      heading: "Mountain Peak",
      description: "A serene view of the snow-covered mountain top.",
      link: "#",
    },
  ];

  return (
    
    <div className="custom-container-box">
    <div className="custom-card-carousel-wrapper">
      <div className="custom-carousel-width">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.heading} className="custom-carousel-card">
              <div className="custom-carousel-image-container">
                <img
                  src={item.src}
                  alt={item.heading}
                  className="custom-carousel-image"
                />
              </div>
              <div className="custom-carousel-content">
                <h5 className="custom-carousel-heading">{item.heading}</h5>
                <p className="custom-carousel-description">{item.description}</p>
                <button className="custom-carousel-button">Learn More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
);

}

export default CardCarousel;
