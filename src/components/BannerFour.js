import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const BannerFour = () => {
  const [state, setState] = useState({
    nav1: null,
    nav2: null,
  });

  var { slider1, slider2 } = useRef();

  useEffect(() => {
    setState({
      nav1: slider1,
      nav2: slider2,
    });
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <>
      {/* header start */}
      <div className='home-area home-v2 '>
        <div className='header-slider header-slider2'>
          <Slider
            {...settings}
            asNavFor={state.nav2}
            ref={(slider) => (slider1 = slider)}
          >
            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url('/assets/img/slide-v1/bg-01.png')",
                }}
              >
                <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-6'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                          {/* header inner */}
                          <h1 className='title animated slideInRight'>
                            World's Biggest Transporter{" "}
                          </h1>
                          <div className='btn-wrapper style-02 animated fadeInUpBig'>
                            <a href='#' className='boxed-btn'>
                              <span>Contact for transport </span>
                            </a>
                          </div>
                        </div>
                        {/* //.header inner */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url(assets/img/slide-v2/bg-02.png)",
                }}
              >
                <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-6'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                          {/* header inner */}
                          <h1 className='title animated slideInRight'>
                            World's Biggest Transporter{" "}
                          </h1>
                          <div className='btn-wrapper style-02 aanimated fadeInUpBig'>
                            <a href='#' className='boxed-btn'>
                              <span>Contact for transport </span>
                            </a>
                          </div>
                        </div>
                        {/* //.header inner */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url(assets/img/slide-v2/bg-03.png)",
                }}
              >
                <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-6'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                          {/* header inner */}
                          <h1 className='title animated slideInRight'>
                            World's Biggest Transporter{" "}
                          </h1>
                          <div className='btn-wrapper style-02 aanimated fadeInUpBig'>
                            <a href='#' className='boxed-btn'>
                              <span>Contact for transport </span>
                            </a>
                          </div>
                        </div>
                        {/* //.header inner */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url(assets/img/slide-v2/bg-02.png)",
                }}
              >
                <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-6'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                          {/* header inner */}
                          <h1 className='title animated slideInRight'>
                            World's Biggest Transporter{" "}
                          </h1>
                          <div className='btn-wrapper style-02 aanimated fadeInUpBig'>
                            <a href='#' className='boxed-btn'>
                              <span>Contact for transport </span>
                            </a>
                          </div>
                        </div>
                        {/* //.header inner */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url(assets/img/slide-v2/bg-03.png)",
                }}
              >
                <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-6'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                          {/* header inner */}
                          <h1 className='title animated slideInRight'>
                            World's Biggest Transporter{" "}
                          </h1>
                          <div className='btn-wrapper style-02 aanimated fadeInUpBig'>
                            <a href='#' className='boxed-btn'>
                              <span>Contact for transport </span>
                            </a>
                          </div>
                        </div>
                        {/* //.header inner */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className='header-bottom'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='home-v2-contact'>
                  <ul className='social-link animated fadeInLeftBig'>
                    <li>
                      {" "}
                      <a href='#' className='facebook'>
                        {" "}
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href='#' className='twitter'>
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href='#' className=''>
                        WhatsApp
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='header-sm-slider'>
                  <Slider
                    asNavFor={state.nav1}
                    ref={(slider) => (slider2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                  >
                    <div className='slider-image1 custom-thumb'>
                      <img
                        src='assets/img/slide-v2/sm1.png'
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                    <div className='slider-image2 custom-thumb'>
                      <img
                        src='assets/img/slide-v2/sm2.png'
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                    <div className='slider-image3 custom-thumb'>
                      <img
                        src='assets/img/slide-v2/sm3.png'
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                    <div className='slider-image2 custom-thumb'>
                      <img
                        src='assets/img/slide-v2/sm2.png'
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                    <div className='slider-image3 custom-thumb'>
                      <img
                        src='assets/img/slide-v2/sm3.png'
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header end */}
    </>
  );
};

export default BannerFour;
