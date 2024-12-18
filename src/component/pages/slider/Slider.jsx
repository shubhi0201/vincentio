import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./slider.css"
import images1 from "./images1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
const slides = [
  {
    image: images1,
    title: "Mumbai: The Way of Water",
    subTitle:
      "Welcome to Mumbai"
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

function Slider({ slides }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    console.log("Selected index: ", selectedIndex);
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}
      prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon changed" />}
    >
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx} interval={slide.interval}>
          <img
            className="d-block w-100"
            src={slide.image}
            alt={slide.title || `Slide ${idx + 1}`}
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.subTitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}


function App() {
  return (
    <div className="slider">
      <Slider slides={slides} />
    </div>
  );
}

export default App;
