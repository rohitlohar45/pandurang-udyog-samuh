import React, { useState } from "react";
import {
  FaArrowRight,
  FaBehance,
  FaCalendarAlt,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaPencilAlt,
  FaPlay,
  FaRegCalendarAlt,
  FaRegCommentDots,
  FaRegEnvelope,
  FaReply,
  FaSearch,
  FaTags,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const BlogDetailsInner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* blog-details area start */}
      <div className='blog-details-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='single-blog-inner style-2'>
                <div className='thumb'>
                  <img src='assets/img/blog/4.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <ul className='blog-meta'>
                    <li>
                      <FaUserAlt /> By{" "}
                      <a className='ms-1' href='#'>
                        {" "}
                        Admin
                      </a>
                    </li>
                    <li>
                      <FaRegCalendarAlt /> 01 July, 2022
                    </li>
                    <li>
                      <FaRegCommentDots /> Comments(3)
                    </li>
                    <li>
                      <FaTags /> Sea Transportation
                    </li>
                  </ul>
                  <h2>
                    <Link to='/blog-details'>
                      Express delivery is going to slow down
                    </Link>
                  </h2>
                  <p>
                    Phosfluorescently unleash highly efficient experiences for
                    team driven scenarios. Conveniently enhance cross-unit
                    communities with accurate testing procedures. Dynamically
                    embrace team building expertise. Proactively monetize
                    parallel solutions. Dramatically strategize excellent
                    materials via enabled information. Efficiently recaptiualize
                    low-risk high-yield relationships via functionalized value.
                    Rapidiously aggregate team building methodologies.
                  </p>
                  <blockquote>
                    <p>
                      Holisticly underwhelm ethical solutions whereas
                      maintainable strategic theme areas.
                    </p>
                    <div className='d-flex'>
                      <span>Alone Mask</span>
                      <div className='icon'>
                        <img
                          src='assets/img/icon/blog-quote.png'
                          alt='Transpro'
                        />
                      </div>
                    </div>
                  </blockquote>
                  <p>
                    Dynamically embrace team building expertis. Proactivel
                    monetize parallel solution. Dramatically strategize
                    excellent materials via enabled information.
                  </p>
                  <div className='video-thumb-wrap pt-1 pb-4'>
                    <img src='assets/img/blog/7.png' alt='Transpro' />
                    <span
                      className='video-play-btn cursor-pointer'
                      data-effect='mfp-zoom-in'
                      onClick={() => setOpen(true)}
                    >
                      <FaPlay />
                    </span>
                  </div>
                  <p>
                    Envisioneer high-quality imperatives with distributed
                    process improvements. Globally facilitate interactive
                    customer service rather than corporate value. Energistically
                    network cross media action items via virtual methodologies.
                  </p>
                  <div className='tag-and-share'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <strong>Tags:</strong>
                        <div className='tags d-inline-block'>
                          <a href='#'>TRANSPORT</a>
                          <a href='#'>BUSINESS</a>
                        </div>
                      </div>
                      <div className='col-lg-6 text-md-end'>
                        <strong>Share:</strong>
                        <ul className='social-media gap-2'>
                          <li className='ms-1'>
                            <a href='#'>
                              <FaFacebookF />
                            </a>
                          </li>
                          <li className='ms-1'>
                            <a href='#'>
                              <FaTwitter />
                            </a>
                          </li>
                          <li className='ms-1'>
                            <a href='#'>
                              <FaInstagram />
                            </a>
                          </li>
                          <li className='ms-1'>
                            <a href='#'>
                              <FaLinkedinIn />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <ModalVideo
                  channel='youtube'
                  autoplay
                  isOpen={isOpen}
                  videoId='XM6kTQPzzpQ'
                  onClose={() => setOpen(false)}
                />
              </div>
              <div className='blog-comment'>
                <h4>COMMENTS(3)</h4>
                <div className='media'>
                  <a href='#'>
                    <img src='assets/img/blog/blog-comment.png' alt='comment' />
                  </a>
                  <div className='media-body'>
                    <h6>Karlos Matheuse</h6>
                    <span className='date'>21Jun, 2022 08:56pm</span>
                    <p>
                      Architect lrisk manufactured product without platform
                      interface. Monotonectally cultivate mission-critical
                      content before interoperable.
                    </p>
                    <a href='#'>
                      <FaReply />
                      REPLY
                    </a>
                  </div>
                </div>
                <div className='media media-nesting'>
                  <a href='#'>
                    <img
                      src='assets/img/blog/blog-comment-2.png'
                      alt='comment'
                    />
                  </a>
                  <div className='media-body'>
                    <h6>July Alvarez</h6>
                    <span className='date'>21Jun, 2022 08:56pm</span>
                    <p>
                      Architect lrisk manufactured product without platform
                      interface. Monotonectally cultivate mission-critical
                      content before interoperable.
                    </p>
                    <a href='#'>
                      <FaReply />
                      REPLY
                    </a>
                  </div>
                </div>
                <div className='media mb-0 border-0 pb-0'>
                  <a href='#'>
                    <img
                      src='assets/img/blog/blog-comment-3.png'
                      alt='comment'
                    />
                  </a>
                  <div className='media-body pb-0'>
                    <h6>Karlos Matheuse</h6>
                    <span className='date'>21Jun, 2022 08:56pm</span>
                    <p>
                      Architect lrisk manufactured product without platform
                      interface. Monotonectally cultivate mission-critical
                      content before interoperable.
                    </p>
                    <a href='#'>
                      <FaReply />
                      REPLY
                    </a>
                  </div>
                </div>
              </div>
              <form className='blog-comment-form'>
                <h4>LEAVE A REPLY</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked
                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label>
                        <FaUserAlt />
                      </label>
                      <input type='text' placeholder='Your name' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label>
                        <FaRegEnvelope />
                      </label>
                      <input type='text' placeholder='Your email' />
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='single-input-inner'>
                      <label>
                        <FaGlobe />
                      </label>
                      <input type='text' placeholder=' Website' />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='single-input-inner'>
                      <label>
                        <FaPencilAlt />
                      </label>
                      <textarea placeholder='Write massage' defaultValue={""} />
                    </div>
                  </div>
                  <div className='col-12'>
                    <a className='btn btn-base' href='#'>
                      {" "}
                      SEND MESSAGE
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-lg-4'>
              <div className='sidebar-area'>
                <div className='widget widget_search'>
                  <form className='search-form'>
                    <div className='form-group'>
                      <input type='text' placeholder='Search here...' />
                    </div>
                    <button className='submit-btn' type='submit'>
                      <FaSearch />
                    </button>
                  </form>
                </div>
                <div className='widget widget_catagory'>
                  <h4 className='widget-title'>
                    CATEGORIES
                    <span className='dot' />
                  </h4>
                  <ul className='catagory-items'>
                    <li>
                      <Link to='/blog'>
                        Air Transportation{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Sea Transportation{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Warehouse{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Road Transportation{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Train Transportation{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Land Transportation{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='widget widget_author text-center'>
                  <div className='thumb'>
                    <img src='assets/img/blog/blog-author.png' alt='Transpro' />
                  </div>
                  <h5>Alone Mask</h5>
                  <p>
                    Assertively pontificate high standards in scenarios rather
                    than sustainable.
                  </p>
                  <ul className='social-media'>
                    <li>
                      <a href='#'>
                        {" "}
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        {" "}
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        {" "}
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        {" "}
                        <FaBehance />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='widget widget-recent-post'>
                  <h4 className='widget-title'>
                    RECENT POST
                    <span className='dot' />
                  </h4>
                  <ul>
                    <li>
                      <div className='single-recent-post'>
                        <div className='thumb'>
                          <img src='assets/img/widget/1.png' alt='Transpro' />
                        </div>
                        <div className='details'>
                          <h6>
                            <a href='#'>Learning Transport Is Not Difficult</a>
                          </h6>
                          <p>
                            <FaCalendarAlt />
                            01 July, 2022
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='single-recent-post'>
                        <div className='thumb'>
                          <img src='assets/img/widget/2.png' alt='Transpro' />
                        </div>
                        <div className='details'>
                          <h6>
                            <a href='#'>Learning Transport Is Not Difficult</a>
                          </h6>
                          <p>
                            <FaCalendarAlt />
                            01 July, 2022
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='single-recent-post'>
                        <div className='thumb'>
                          <img src='assets/img/widget/3.png' alt='Transpro' />
                        </div>
                        <div className='details'>
                          <h6>
                            <a href='#'>Learning Transport Is Not Difficult</a>
                          </h6>
                          <p>
                            <FaCalendarAlt />
                            01 July, 2022
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='widget widget_tags'>
                  <h4 className='widget-title'>
                    POPULAR TAGS
                    <span className='dot' />
                  </h4>
                  <div className='tagcloud'>
                    <a href='#'>BUSINESS</a>
                    <a href='#'>MARKETING</a>
                    <a href='#'>DESIGN</a>
                    <a href='#'>WEB DEVELOPMENTS</a>
                    <a href='#'>BRANDING</a>
                    <a href='#'>UI/UX</a>
                    <a href='#'>APPS</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog-details area end */}
    </>
  );
};

export default BlogDetailsInner;
