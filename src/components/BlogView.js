import React from "react";
import {
  FaArrowRight,
  FaBehance,
  FaCalendarAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaRegCalendarAlt,
  FaRegCommentDots,
  FaSearch,
  FaTags,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogView = () => {
  return (
    <>
      {/* blog area start */}
      <div className='blog-area pd-top-120 pd-bottom-120'>
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
                    parallel solutions.
                  </p>
                  <Link className='btn btn-base' to='/blog-details'>
                    READ MORE
                  </Link>
                </div>
              </div>
              <div className='single-blog-inner style-2'>
                <div className='thumb'>
                  <img src='assets/img/blog/5.png' alt='Transpro' />
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
                      USA exhibition support for teneso NewYork
                    </Link>
                  </h2>
                  <p>
                    Phosfluorescently unleash highly efficient experiences for
                    team driven scenarios. Conveniently enhance cross-unit
                    communities with accurate testing procedures. Dynamically
                    embrace team building expertise. Proactively monetize
                    parallel solutions.
                  </p>
                  <Link className='btn btn-base' to='/blog-details'>
                    READ MORE
                  </Link>
                </div>
              </div>
              <div className='single-blog-inner style-2'>
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
                    parallel solutions.
                  </p>
                  <Link className='btn btn-base' to='/blog-details'>
                    READ MORE
                  </Link>
                </div>
              </div>
              <div className='single-blog-inner style-2'>
                <div className='thumb'>
                  <img src='assets/img/blog/6.png' alt='Transpro' />
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
                      New Additions to our great Metro trucks.
                    </Link>
                  </h2>
                  <p>
                    Phosfluorescently unleash highly efficient experiences for
                    team driven scenarios. Conveniently enhance cross-unit
                    communities with accurate testing procedures. Dynamically
                    embrace team building expertise. Proactively monetize
                    parallel solutions.
                  </p>
                  <Link className='btn btn-base' to='/blog-details'>
                    READ MORE
                  </Link>
                </div>
              </div>
              <ul className='pagination'>
                <li>
                  <a className='page-numbers active' href='#/'>
                    1
                  </a>
                </li>
                <li>
                  <a className='page-numbers' href='#/'>
                    2
                  </a>
                </li>
                <li>
                  <a className='page-numbers' href='#/'>
                    3
                  </a>
                </li>
                <li>
                  <a className='page-next' href='#/'>
                    NEXT <FaArrowRight />
                  </a>
                </li>
              </ul>
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
      {/* blog area end */}
    </>
  );
};

export default BlogView;
