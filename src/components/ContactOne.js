import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactOne = () => {
  return (
    <>
      {/*contact-area start*/}
      <div>
        <img src='assets/img/contact/1.png' alt='Transpro' />
        <div className='container'>
          <div className='row justify-content-end'>
            <div className='col-xl-6 col-lg-7'>
              <div className='cta-inner-wrap'>
                <div className='section-title style-white mb-0'>
                  <h4 className='subtitle style-2'>LET’S TALK</h4>
                  <h2 className='title'>
                    YOU NEED ANY HELP? GET FREE CONSULTATION
                  </h2>
                </div>
                <div className='single-cta-wrap'>
                  <div className='icon'>
                    <FaPhoneAlt />
                  </div>
                  <div className='details'>
                    <h6>Have Any Question</h6>
                    <h3>+19524357106</h3>
                  </div>
                </div>
                <Link className='btn btn-base' to='/contact'>
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*contact-area end*/}
    </>
  );
};

export default ContactOne;
