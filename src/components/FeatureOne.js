import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
const FeatureOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* feature area start */}
      <div className='container'>
        <div className='feature-area mb-60'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='section-title mb-0'>
                <h4 className='subtitle'>FEATURES</h4>
                <h2 className='title'>WHAT WE OFFER</h2>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='section-title'>
                <p className='content left-line'>
                  Collaboratively customize front-end materials with
                  standardized infomediaries. Holisticly engineer performance
                  based value. Assertively benchmark turnkey web-readiness
                  rather than long.
                </p>
              </div>
            </div>
          </div>
          <div className='feature-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='feature-wrap bg-pink'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-1.png' alt='Transpro' />
                  </div>
                  <h5>TRANSPARENT PRICING</h5>
                  <p>
                    Globally initiate resource maximizing total linkage via
                    enabled process improvements.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-ash'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-2.png' alt='Transpro' />
                  </div>
                  <h5>ONLINE TRACKING</h5>
                  <p>
                    Globally initiate resource maximizing total linkage via
                    enabled process improvements.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-sky'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-3.png' alt='Transpro' />
                  </div>
                  <h5>WAREHOUSE STORAGE</h5>
                  <p>
                    Globally initiate resource maximizing total linkage via
                    enabled process improvements.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-ash'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-2.png' alt='Transpro' />
                  </div>
                  <h5>ONLINE TRACKING</h5>
                  <p>
                    Globally initiate resource maximizing total linkage via
                    enabled process improvements.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* feature area end */}
    </>
  );
};

export default FeatureOne;
