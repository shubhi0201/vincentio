import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import images1 from "./images1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

const slides = [
  {
    image: images1,
    title: "Mumbai: The Way of Water",
    subTitle: "Welcome to Mumbai",
  },
  {
    image: image2,
    title: "Black Adam",
    subTitle:
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    interval: 500,
  },
  {
    image: image3,
    title: "Black Panther: Wakanda Forever",
    subTitle:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    interval: 2500,
  },
];

function App() {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time in ms between slides
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
  };

  return (
    <div className="slider-container"style={{margin:0, backgroundColor:"white"}}>
    
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="slide-item">
            <img
              src={slide.image}
              alt={slide.title || `Slide ${idx + 1}`}
              className="slide-image"
              style={{ minWidth: "100%", maxHeight: 400 }}
            />
            {/* <div className="slide-caption"style={{}}>
              <h3>{slide.title}</h3>
              <p>{slide.subTitle}</p>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
