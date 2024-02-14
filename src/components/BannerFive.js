import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const BannerFive = () => {
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
    arrows: true,
    infinite: false,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <>
      {/* header start */}
      <div className='home-area home-v3 '>
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
                  backgroundImage: "url('/assets/img/slide-v3/bg-01.png')",
                }}
              >
                <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-6'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                          {/* header inner */}
                          <h1 className='title animated slideInRight'>
                            International Cargo Transport
                          </h1>
                          <p className='sub-title'>
                            Led ask possible mistress relation elegance eat
                            likewise debating. By message or am nothing amongst
                            chiefly address. The its enable direct men depend
                            highly. Ham windows sixteen who inquiry fortune
                            demands. Is be upon sang fond must shew.
                          </p>
                          <div className='btn-wrapper'>
                            <a href='#' className='boxed-btn'>
                              <span>Contact for transport </span>
                            </a>
                          </div>
                        </div>
                        {/* //.header inner */}
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='right-wrapper'>
                        <div className='inner'>
                          <h2>
                            Land freight transport company for all types of
                            goods
                          </h2>
                          <div className='list'>
                            <ul>
                              <li>
                                Online transportation and forwarding software
                              </li>
                              <li>Transport orders</li>
                              <li>Fleet management</li>
                              <li>Goods or produce being transported</li>
                            </ul>
                          </div>
                        </div>
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
                  backgroundImage: "url(assets/img/slide-v3/bg-02.png)",
                }}
              >
                <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-6'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                          {/* header inner */}
                          <h1 className='title animated slideInRight'>
                            Trucking connections all over the world{" "}
                          </h1>
                          <p className='sub-title'>
                            Led ask possible mistress relation elegance eat
                            likewise debating. By message or am nothing amongst
                            chiefly address. The its enable direct men depend
                            highly. Ham windows sixteen who inquiry fortune
                            demands. Is be upon sang fond must shew.
                          </p>
                          <div className='btn-wrapper'>
                            <a href='#' className='boxed-btn'>
                              <span>Contact for transport </span>
                            </a>
                          </div>
                        </div>
                        {/* //.header inner */}
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='right-wrapper'>
                        <div className='inner'>
                          <h2>
                            Land freight transport company for all types of
                            goods
                          </h2>
                          <div className='list'>
                            <ul>
                              <li>
                                Online transportation and forwarding software
                              </li>
                              <li>Transport orders</li>
                              <li>Fleet management</li>
                              <li>Goods or produce being transported</li>
                            </ul>
                          </div>
                        </div>
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
                  backgroundImage: "url(assets/img/slide-v3/bg-03.png)",
                }}
              >
                <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-6'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                          {/* header inner */}
                          <h1 className='title animated slideInRight'>
                            Cargo consists of goods conveyed{" "}
                          </h1>
                          <p className='sub-title'>
                            Led ask possible mistress relation elegance eat
                            likewise debating. By message or am nothing amongst
                            chiefly address. The its enable direct men depend
                            highly. Ham windows sixteen who inquiry fortune
                            demands. Is be upon sang fond must shew.
                          </p>
                          <div className='btn-wrapper'>
                            <a href='#' className='boxed-btn'>
                              <span>Contact for transport </span>
                            </a>
                          </div>
                        </div>
                        {/* //.header inner */}
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='right-wrapper'>
                        <div className='inner'>
                          <h2>
                            Land freight transport company for all types of
                            goods
                          </h2>
                          <div className='list'>
                            <ul>
                              <li>
                                Online transportation and forwarding software
                              </li>
                              <li>Transport orders</li>
                              <li>Fleet management</li>
                              <li>Goods or produce being transported</li>
                            </ul>
                          </div>
                        </div>
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
                  backgroundImage: "url(assets/img/slide-v3/bg-04.png)",
                }}
              >
                <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-6'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                          {/* header inner */}
                          <h1 className='title animated slideInRight'>
                            Freight transport companies
                          </h1>
                          <p className='sub-title'>
                            Led ask possible mistress relation elegance eat
                            likewise debating. By message or am nothing amongst
                            chiefly address. The its enable direct men depend
                            highly. Ham windows sixteen who inquiry fortune
                            demands. Is be upon sang fond must shew.
                          </p>
                          <div className='btn-wrapper'>
                            <a href='#' className='boxed-btn'>
                              <span>Contact for transport </span>
                            </a>
                          </div>
                        </div>
                        {/* //.header inner */}
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='right-wrapper'>
                        <div className='inner'>
                          <h2>
                            Land freight transport company for all types of
                            goods
                          </h2>
                          <div className='list'>
                            <ul>
                              <li>
                                Online transportation and forwarding software
                              </li>
                              <li>Transport orders</li>
                              <li>Fleet management</li>
                              <li>Goods or produce being transported</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* header end */}
    </>
  );
};

export default BannerFive;
