import React from "react";
import Slider from "../slider/Slider";
import "./Home.css";
import CardCarousel from "../cards/Cards";

// Data for the cards
const Home = () => {
  return (
    <div className="main">
      <div className="home">
        <Slider />
        <div className="card">
          <CardCarousel />
        </div>
        
         
          <div className="row-fluid-wrapper row-depth-1 row-number-9 dnd-section dnd_area-row-4-background-layers dnd_area-row-4-padding dnd_area-row-4-background-gradient">
            <div className="row-fluid">
              <div
                className="span12 widget-span widget-type-cell dnd-column"
                style={{ background: "linear-gradient(45deg, red, orange, yellow)"}} // Fix style prop to be an empty object
                data-widget-type="cell"
                data-x="0"
                data-w="12"
              >
                <div className="row-fluid-wrapper row-depth-1 row-number-10 dnd-row">
                  <div className="row-fluid">
                    <div
                      className="span12 widget-span widget-type-custom_widget dnd-module"
                      style={{}} // Fix style prop to be an empty object
                      data-widget-type="custom_widget"
                      data-x="0"
                      data-w="12"
                    >
                      <div
                        id="hs_cos_wrapper_widget_1690357850119"
                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                        style={{}} // Fix style prop to be an empty object
                        data-hs-cos-general-type="widget"
                        data-hs-cos-type="module"
                      >
                        <div className="separator" style={{display:"flex", color:"black", padding:10, justifyContent:"space-around"  }}>
                          <div className="separator__keyword">
                            Accessible
                          </div>
                          <div className="separator__keyword">
                            Affordable
                          </div>
                          <div className="separator__keyword">
                            Efficient
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          hello world
      
      </div>
    </div>
  );
};

export default Home;
