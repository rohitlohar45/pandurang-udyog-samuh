import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
const WhyChooseUsOne = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/*wcu-area start*/}
      <div
        className='wcu-area bg-overlay'
        style={{ background: "url(assets/img/wcu/bg.png)" }}
      >
        <img className='img-1' src='assets/img/wcu/1.png' alt='Transpro' />
        <img className='img-2' src='assets/img/wcu/2.png' alt='Transpro' />
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-7 col-lg-6 order-lg-2'>
              <div className='video-thumb-wrap'>
                <img src='assets/img/wcu/video.png' alt='Transpro' />
                <span
                  className='video-play-btn cursor-pointer'
                  data-effect='mfp-zoom-in'
                  onClick={() => setOpen(true)}
                >
                  <FaPlay />
                </span>
              </div>
            </div>
            <div className='col-xl-5 col-lg-6 order-lg-1'>
              <div className='section-title style-white mb-0'>
                <h4 className='subtitle style-2'>WHY CHOOSE US</h4>
                <h2 className='title'>WHY CHOOSE FOR US</h2>
                <p className='content'>
                  Dramatically enhance interactive metrics for reliable
                  services. Proactively unleash fully researched e-commerce.
                </p>
              </div>
              <div className='single-wcu-wrap'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-1.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>FAST TRANSPORTION SERVICE</h6>
                  <p>
                    Enhance interactive metrics for reliable services.
                    Proactively unleash fully researched.
                  </p>
                </div>
              </div>
              <div className='single-wcu-wrap'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-2.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>24/7 ONLINE SUPPORT</h6>
                  <p>
                    Enhance interactive metrics for reliable services.
                    Proactively unleash fully researched.
                  </p>
                </div>
              </div>
              <div className='single-wcu-wrap'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-3.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>SAFETY AND RELIABILITY</h6>
                  <p>
                    Enhance interactive metrics for reliable services.
                    Proactively unleash fully researched.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*wcu-area end*/}
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XM6kTQPzzpQ'
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default WhyChooseUsOne;
