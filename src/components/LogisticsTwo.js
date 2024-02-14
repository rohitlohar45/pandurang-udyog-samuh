import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { FaBoxOpen, FaLayerGroup, FaRssSquare } from "react-icons/fa";
const LogisticsTwo = () => {
  return (
    <>
      {/* Start Logistics area  */}
      <div className='logistics_area style-02 pt-5 pb-0'>
        <div className='container-fluid'>
          <div className='row justify-content-start'>
            <div className='col-lg-6 remove-col-padding'>
              <div className='logistics-image' />
            </div>
            <div className='col-lg-5'>
              <div className='logistics-content'>
                <div className='section-title  text-left'>
                  <span className='subtitle'>Our Core Values</span>
                  <h2 className='title'>Global Lead Logistics</h2>
                  <p>
                    Affronting everything discretion men now own did. Still
                    round match we to. Frankness pronounce daughters remainder
                    extensive has but. Building mr concerns servants in he
                    outlived am breeding. He so lain good miss when sell some at
                    if. Told hand so an rich gave next. How doubt yet again see
                    son smart. While mirth large of on front. Ye he greater
                    related adapted proceed entered an. Through it examine
                    express promise no. Past add size game cold girl off how
                    old.
                  </p>
                </div>
              </div>
              <div className='counterup' id='counterup'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-4'>
                      <div className='countr wow fadeInLeft'>
                        <div className='couter-icon'>
                          <FaBoxOpen />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                <CountUp delay={0} start={0} end={45789} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title'>Packages Delivered</h3>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4'>
                      <div className='countr wow fadeInUp'>
                        <div className='couter-icon'>
                          <FaLayerGroup />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                <CountUp delay={0} start={0} end={31216} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title'>Repeat Customers</h3>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4'>
                      <div className='countr wow fadeInRight'>
                        <div className='couter-icon'>
                          <FaRssSquare />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                <CountUp delay={0} start={0} end={21454} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title'>Our Clients</h3>
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

export default LogisticsTwo;
