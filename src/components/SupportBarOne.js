import React from "react";
import {
  FaBuffer,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaPhoneAlt,
  FaRegEnvelope,
  FaTwitter,
  FaUserAlt,
  FaYoutube,
} from "react-icons/fa";

const SupportBarOne = () => {
  return (
    <>
      {/* support bar area start */}
      <div className='support-bar'>
        <div className='container'>
          <div className='row reorder-xs clearfix'>
            <div className='col-lg-6 align-self-center'>
              <div className='support-left'>
                {/* support left start */}
                <ul>
                  <li>
                    <FaGlobe />
                    <select className='country'>
                      <option value='english selected'>English</option>
                      <option value='Arabic'>Arabic</option>
                      <option value='spanish'>Spanish</option>
                      <option value='bangla'>Bangla</option>
                    </select>
                  </li>
                  <li>
                    <a href='mailTo:example@example.com'>
                      <FaRegEnvelope />
                      example@example.com
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href='tel:+8801-728-123-456'>
                      {" "}
                      <FaPhoneAlt />
                      +8801-728-123-456
                    </a>
                  </li>
                </ul>
              </div>
              {/* support left end */}
            </div>
            <div className='col-lg-6'>
              <div className='support-right'>
                {" "}
                {/* support right start */}
                <ul>
                  <li className='fare-rate-responsive'>
                    <a href='#'>
                      <FaBuffer />
                      Get a Fare Rate
                    </a>
                  </li>
                  <li>
                    <ul className='social-link'>
                      <li>
                        <a href='#' className='facebook'>
                          {" "}
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href='#' className='twitter'>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://www.youtube.com/channel/UCz1tS-oRzKeElBOd6pIjgLQ'
                          className='youtube'
                        >
                          <FaYoutube />
                        </a>
                      </li>
                      <li>
                        <a href='#' className='instagram'>
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='sign-nav ps-3'>
                    <a className='sen-signin' href='#0'>
                      <FaUserAlt />
                      Sign In
                    </a>
                  </li>
                </ul>
              </div>
              {/* support right end */}
            </div>
          </div>
        </div>
      </div>
      {/* support bar area end */}
    </>
  );
};

export default SupportBarOne;
