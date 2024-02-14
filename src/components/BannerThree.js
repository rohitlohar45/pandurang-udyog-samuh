import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaTruckMoving } from "react-icons/fa";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const BannerThree = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  const settings = {
    dots: true,
    arrows: false,
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
      <div className='banner-area banner-area-3'>
        <div className='banner-slider owl-carousel'>
          <Slider {...settings}>
            <div>
              <div
                className='item'
                style={{ background: "url('/assets/img/slide-v1/bg-01.png')" }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title'>
                          We Will Transfer Anything in any Where
                        </h1>
                        <p className='b-animate-3 content'>
                          Professionally strategize stand-alone functionalities
                          and cooperative total linkage. Objectively predominate
                          virtual quality vectors with orthogonal.
                        </p>
                        <div className='icon-wrap b-animate-3'>
                          <div className='icon-file'>
                            <FaTruckMoving /> <span>Road Transport</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='img-wrap b-animate-6'>
                        <div className='img-file'>
                          <img src='assets/img/slide-v1/slide-01.png' alt='' />
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
                style={{ background: "url('/assets/img/slide-v1/bg-03.png')" }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title'>
                          We Will Transfer Anything in any Where
                        </h1>
                        <p className='b-animate-3 content'>
                          Professionally strategize stand-alone functionalities
                          and cooperative total linkage. Objectively predominate
                          virtual quality vectors with orthogonal.
                        </p>
                        <div className='icon-wrap b-animate-3'>
                          <div className='icon-file'>
                            <RiFlightTakeoffFill />{" "}
                            <span>Airlines Transport</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='img-wrap b-animate-6'>
                        <div className='img-file'>
                          <img src='assets/img/slide-v1/slide-03.png' alt='' />
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

export default BannerThree;
