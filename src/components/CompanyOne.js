import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const CompanyOne = () => {
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
          slidesToScroll: 1,
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
      {/* company area start  */}
      <div className='company-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-12'>
              <div className='company-carousel'>
                <Slider {...settings}>
                  <div className='single-carousel-item'>
                    <a href='#'>
                      <img
                        src='assets/img/partner/01.png'
                        className='img-fluid'
                        alt='company image'
                      />
                    </a>
                  </div>
                  <div className='single-carousel-item'>
                    <a href='#'>
                      <img
                        src='assets/img/partner/02.png'
                        className='img-fluid'
                        alt='company image'
                      />
                    </a>
                  </div>
                  <div className='single-carousel-item'>
                    <a href='#'>
                      <img
                        src='assets/img/partner/04.png'
                        className='img-fluid'
                        alt='company image'
                      />
                    </a>
                  </div>
                  <div className='single-carousel-item'>
                    <a href='#'>
                      <img
                        src='assets/img/partner/03.png'
                        className='img-fluid'
                        alt='company image'
                      />
                    </a>
                  </div>
                  <div className='single-carousel-item'>
                    <a href='#'>
                      <img
                        src='assets/img/partner/05.png'
                        className='img-fluid'
                        alt='company image'
                      />
                    </a>
                  </div>
                  <div className='single-carousel-item'>
                    <a href='#'>
                      <img
                        src='assets/img/partner/06.png'
                        className='img-fluid'
                        alt='company image'
                      />
                    </a>
                  </div>
                  <div className='single-carousel-item'>
                    <a href='#'>
                      <img
                        src='assets/img/partner/05.png'
                        className='img-fluid'
                        alt='company image'
                      />
                    </a>
                  </div>
                  <div className='single-carousel-item'>
                    <a href='#'>
                      <img
                        src='assets/img/partner/06.png'
                        className='img-fluid'
                        alt='company image'
                      />
                    </a>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* company area end */}
    </>
  );
};

export default CompanyOne;
