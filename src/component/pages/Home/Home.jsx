import React from "react";
import Slider from "../slider/Slider"; // Importing the Slider component
import "./Home.css"; // Importing CSS styles for the Home component
import CardCarousel from "../cards/CardCarousel"; // Importing the CardCarousel component

// Main Home Component
const Home = () => {
  return (
    <div className="body">
      {/* Main container for the Home page */}
      <div className="main1">
        <div className="home">
          {/* Slider Section */}
          <Slider />

          {/* Card Carousel Section */}
          <div
            className="card"
            style={{ width: "100%", transform: "scale(1)" }}
          >
            <CardCarousel />
          </div>

          {/* Accessible, Affordable, Efficient Section */}
          <div className="row-fluid-wrapper row-depth-1 row-number-9 dnd-section dnd_area-row-4-background-layers dnd_area-row-4-padding dnd_area-row-4-background-gradient">
            <div className="row-fluid">
              <div
                className="span12 widget-span widget-type-cell dnd-column"
                style={{
                  background: "linear-gradient(45deg,skyblue,blue,skyblue,blue,skyblue)",
                }}
                data-widget-type="cell"
                data-x="0"
                data-w="12"
              >
                <div className="row-fluid-wrapper row-depth-1 row-number-10 dnd-row">
                  <div className="row-fluid">
                    <div
                      className="span12 widget-span widget-type-custom_widget dnd-module"
                      style={{}}
                      data-widget-type="custom_widget"
                      data-x="0"
                      data-w="12"
                    >
                      <div
                        id="hs_cos_wrapper_widget_1690357850119"
                        className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                        style={{}}
                        data-hs-cos-general-type="widget"
                        data-hs-cos-type="module"
                      >
                        <div
                          className="separator"
                          style={{
                            display: "flex",
                            color: "black",
                            padding: 10,
                            justifyContent: "space-around",
                          }}
                        >
                          <div className="separator__keyword">Accessible</div>
                          <div className="separator__keyword">Affordable</div>
                          <div className="separator__keyword">Efficient</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Vincentio Section */}
          <div className="maindiv">
            <div
              className="div1"
              style={{ fontSize: 50, fontWeight: 800 }}
            >
              WHY VINCENTIO
            </div>
            <div className="subdiv">
              {/* Kubernetes Management Feature */}
              <div className="div2">
                <div className="div22">Manage Kubernetes</div>
                Deploy your Virtual Machine cluster in seconds and automate
                software deployment, scaling, and management.
              </div>

              {/* Green Cloud Feature */}
              <div className="div3">
                <div className="div22">Green Cloud</div>
                All of our infrastructure is 100% powered by renewable energy
                within our Data Centres in Europe and North America and runs at
                peak efficiency.
              </div>

              {/* Networking Feature */}
              <div className="div4">
                <div className="div22">Networking</div>
                Designed to handle high-demand workloads in a faster, 75% more
                cost-effective manner compared to legacy public cloud providers.
              </div>
            </div>

            {/* Learn More Button */}
            <div className="butt">
              <button className="learn">Learn more</button>
            </div>
          </div>

          {/* GPU Pricing Table */}
          <div className="table" style={{ marginBottom: 0 }}>
            <div className="gpu-grd-pricing_first">
              <div className="gpugpf-box-table">
                <table
                  id="tblSortTest_jquery"
                  className="sort-test-jquery"
                >
                  <thead>
                    <tr>
                      <th>
                        GPU Model <i className="fa fa-fw fa-sort"></i>
                      </th>
                      <th>
                        VRAM <i className="fa fa-fw fa-sort"></i>
                        <span>(GB)</span>
                      </th>
                      <th>
                        Max pCPUs <i className="fa fa-fw fa-sort"></i>
                        <span>per GPU</span>
                      </th>
                      <th>
                        Max RAM (GB) <i className="fa fa-fw fa-sort"></i>
                        <span>per GPU</span>
                      </th>
                      <th>
                        Pricing Per <i className="fa fa-fw fa-sort"></i>
                        <span>Hour</span>
                      </th>
                      <th>
                        Reservation <i className="fa fa-fw fa-sort"></i>
                        <span>Pricing</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Table Rows for GPU Models */}
                    <tr>
                      <td>NVIDIA H100 SXM 80GB</td>
                      <td>80</td>
                      <td>24</td>
                      <td>240</td>
                      <td>$ 3.00 per Hour</td>
                      <td>
                        Starts from{" "}
                        <a href="https://www.hyperstack.cloud/nvidia-hgx-sxm5-h100-reserve-now?hsLang=en">
                          $2.10/hour
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>NVIDIA H100 PCIe NVLink 80GB</td>
                      <td>80</td>
                      <td>31</td>
                      <td>180</td>
                      <td>$ 1.95 per Hour</td>
                      <td>
                        Starts from{" "}
                        <a href="https://www.hyperstack.cloud/nvidia-h100-pcie-reserve-now?hsLang=en">
                          $1.37/hour
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>NVIDIA H100 PCIe 80GB</td>
                      <td>80</td>
                      <td>28</td>
                      <td>180</td>
                      <td>$ 1.90 per Hour</td>
                      <td>
                        Starts from{" "}
                        <a href="https://www.hyperstack.cloud/nvidia-h100-pcie-reserve-now?hsLang=en">
                          $1.33/hour
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>NVIDIA A100 80GB PCIe NVLink</td>
                      <td>80</td>
                      <td>31</td>
                      <td>240</td>
                      <td>$ 1.40 per Hour</td>
                      <td>
                        Starts from{" "}
                        <a href="https://www.hyperstack.cloud/nvidia-a100-reserve-now?hsLang=en">
                          $0.98/hour
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>NVIDIA A100 PCIe 80GB</td>
                      <td>80</td>
                      <td>28</td>
                      <td>120</td>
                      <td>$ 1.35 per Hour</td>
                      <td>
                        Starts from{" "}
                        <a href="https://www.hyperstack.cloud/nvidia-a100-reserve-now?hsLang=en">
                          $0.95/hour
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>NVIDIA L40</td>
                      <td>48</td>
                      <td>28</td>
                      <td>58</td>
                      <td>$ 1.00 per Hour</td>
                      <td>
                        Starts from{" "}
                        <a href="https://www.hyperstack.cloud/nvidia-l40-reserve-now?hsLang=en">
                          $0.70/hour
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>NVIDIA RTX A6000/A40</td>
                      <td>48</td>
                      <td>28</td>
                      <td>58</td>
                      <td>$ 0.50 per Hour</td>
                      <td>
                        Starts from{" "}
                        <a href="https://www.hyperstack.cloud/nvidia-rtx-a6000-reserve-now?hsLang=en">
                          $0.35/hour
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 
