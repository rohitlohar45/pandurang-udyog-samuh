import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { FaBoxOpen, FaLayerGroup } from "react-icons/fa";
const LogisticsOne = () => {
  return (
    <>
      {/* Start Logistics area  */}
      <div className="logistics_area">
        <div className="container-fluid">
          <div className="row justify-content-start">
            <div className="col-lg-6 remove-col-padding">
              <div className="logistics-image" />
            </div>
            <div className="col-lg-5">
              <div className="logistics-content">
                <div className="section-title  text-left">
                  <span className="subtitles">Our Core Values</span>
                  <h2 className="title">Pan Exports Pack House</h2>
                  <p>
                    At Pan Exports and Pan Exports Pack House, our core values
                    ensure excellence, sustainability, and customer
                    satisfaction. With APEDA-approved facilities and innovative
                    practices, we provide top-quality storage and packaging
                    solutions for fruits and vegetables, prioritizing
                    environmental responsibility with eco-friendly solar panels.
                    Our commitment to superior products and services is
                    exemplified by our focus on enhancing banana packaging.
                  </p>
                </div>
              </div>
              <div className="counterup" id="counterup">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="countr wow fadeInLeft">
                        <div className="couter-icon">
                          <FaBoxOpen />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className="counter">
                                <CountUp delay={0} start={0} end={8704} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className="title">Containers Delivered</h3>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="countr wow fadeInUp">
                        <div className="couter-icon">
                          <FaLayerGroup />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className="counter">
                                <CountUp delay={0} start={0} end={5789} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className="title">Repeat Customers</h3>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="countr wow fadeInRight">
                        <div className="couter-icon">
                          <FaBoxOpen />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className="counter">
                                <CountUp delay={0} start={0} end={8789} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className="title">Our Clients</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Logistics area  */}
    </>
  );
};

export default LogisticsOne;
