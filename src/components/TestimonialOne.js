import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const TestimonialOne = () => {
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
    initialSlide: 1,
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
      {/* testimonial area start */}
      <div className='testimonial-area pd-top-115 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center mb-0'>
                <h4 className='subtitle'>TESTIMONIALS</h4>
                <h2 className='title'>OUR CLIENT’S FEEDBACK</h2>
                <p className='content'>
                  Dramatically enhance interactive metrics for reliable
                  services. Proactively unleash fully researched e-commerce.
                </p>
              </div>
            </div>
          </div>
          <div className='testimonial-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                    “Progressively strategize intermandated manufactured
                    products after multidisci plinary sources. Conveniently
                    iterate value-added systems with.”
                  </p>
                  <div className='client-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/testimonial/1.png' alt='Transpro' />
                    </div>
                    <div className='details'>
                      <h5>ANJELINA MATHEUS</h5>
                      <p>Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                    “Progressively strategize intermandated manufactured
                    products after multidisci plinary sources. Conveniently
                    iterate value-added systems with.”
                  </p>
                  <div className='client-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/testimonial/2.png' alt='Transpro' />
                    </div>
                    <div className='details'>
                      <h5>MONISH POUL</h5>
                      <p>Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                    “Progressively strategize intermandated manufactured
                    products after multidisci plinary sources. Conveniently
                    iterate value-added systems with.”
                  </p>
                  <div className='client-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/testimonial/3.png' alt='Transpro' />
                    </div>
                    <div className='details'>
                      <h5>MICHEL CLACRK</h5>
                      <p>Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                    “Progressively strategize intermandated manufactured
                    products after multidisci plinary sources. Conveniently
                    iterate value-added systems with.”
                  </p>
                  <div className='client-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/testimonial/2.png' alt='Transpro' />
                    </div>
                    <div className='details'>
                      <h5>MONISH POUL</h5>
                      <p>Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* testimonial area end */}
    </>
  );
};

export default TestimonialOne;
