import React from "react";
import "./card.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.png";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";

// Updated images array with headings, descriptions, and links
const images = [
  [
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
  ],
  [
    {
      src: image4,
      heading: "Sunset Glow",
      description: "The sky painted with hues of orange and pink.",
      link: "#",
    },
    {
      src: image5,
      heading: "Mountain Peak",
      description: "A serene view of the snow-covered mountain top.",
      link: "#",
    },
    {
      src: image2,
      heading: "City Lights",
      description: "The city comes alive with dazzling lights.",
      link: "#",
    },
    {
      src: image1,
      heading: "Tranquil Forest",
      description: "A walk through the calm and quiet forest.",
      link: "#",
    },
  ],
];

const CardCarousel = () => {
  return (
    <div
      id="multi-item-example"
      className="carousel slide carousel-multi-item"
      data-ride="carousel"
    >
      {/* Controls */}
      <div className="controls-top d-flex justify-content-around">
        <a
          className="carousel-control-prev"
          href="#multi-item-example"
          role="button"
          data-slide="prev"
        >
          <div className="control-btn left-control">
            <i className="fa fa-chevron-left"></i>
          </div>
        </a>
        <a
          className="carousel-control-next"
          href="#multi-item-example"
          role="button"
          data-slide="next"
        >
          <div className="control-btn right-control">
            <i className="fa fa-chevron-right"></i>
          </div>
        </a>
      </div>

      {/* Slides */}
      <div className="carousel-inner" role="listbox">
        {images.map((group, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="row" style={{backgroundColor:"white"}}>
              {group.map((item, idx) => (
                <div key={idx} className="col-md-3 d-flex align-items-stretch">
                  <div className="card mb-2 rotate-card">
                    {/* Image */}
                    <img
                      className="card-img-top"
                      src={item.src}
                      alt={`Slide ${index + 1}, Item ${idx + 1}`}
                      style={{
                        height: "40vh",
                        objectFit: "cover",
                      }}
                    />
                    {/* Card Body */}
                    <div className="card-body text-center d-flex flex-column" >
                      <h5 className="card-title"style={{color: "aliceblue"}}>{item.heading}</h5>
                      <p className="card-text"style={{color: "aliceblue"}}>{item.description}</p>
                      <a href={item.link} className="btn btn-primary mt-auto">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <ol className="carousel-indicators">
        {images.map((_, index) => (
          <li
            key={index}
            data-target="#multi-item-example"
            data-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></li>
        ))}
      </ol>
    </div>
  );
};

export default CardCarousel;
