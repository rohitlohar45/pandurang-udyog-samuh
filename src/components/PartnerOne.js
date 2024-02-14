import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const PartnerOne = () => {
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
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      {/*partner-area start*/}
      <div className='partner-area pd-top-90 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='section-title text-center'>
                <h4 className='subtitle'>HAPPY CLIENTS</h4>
                <h2 className='title'>TRUSTED BY OUR 365,000 CLIENTS</h2>
                <p className='content'>
                  Dramatically enhance interactive metrics for reliable
                  services. Proactively unleash fully researched e-commerce.
                </p>
              </div>
            </div>
          </div>
          <div className='partner-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/1.png' alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/2.png' alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/3.png' alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/4.png' alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/5.png' alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/6.png' alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/2.png' alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/3.png' alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/4.png' alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='assets/img/partner/5.png' alt='Transpro' />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/*partner-area end*/}
    </>
  );
};

export default PartnerOne;
