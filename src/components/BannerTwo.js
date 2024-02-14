import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const BannerTwo = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      {/* banner start */}
      <div className='banner-area banner-area-2'>
        <div className='banner-slider owl-carousel'>
          <Slider {...settings}>
            <div>
              <div
                className='item'
                style={{ background: "url('/assets/img/banner/2.png')" }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title'>
                          FAST AND RELIABLE MOVERS
                        </h1>
                        <p className='b-animate-3 content'>
                          Professionally strategize stand-alone functionalities
                          and cooperative total linkage. Objectively predominate
                          virtual quality vectors with orthogonal.
                        </p>
                        <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/service'
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className='btn btn-white b-animate-4'
                            to='/contact'
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className='item'
                style={{ background: "url('/assets/img/banner/2.png')" }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title'>
                          FAST AND RELIABLE MOVERS
                        </h1>
                        <p className='b-animate-3 content'>
                          Professionally strategize stand-alone functionalities
                          and cooperative total linkage. Objectively predominate
                          virtual quality vectors with orthogonal.
                        </p>
                        <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/service'
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className='btn btn-white b-animate-4'
                            to='/contact'
                          >
                            Contact Us
                          </Link>
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
      {/* banner end */}
    </>
  );
};

export default BannerTwo;
