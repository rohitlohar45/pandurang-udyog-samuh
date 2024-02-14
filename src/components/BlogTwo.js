import React from "react";
import { FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogTwo = () => {
  return (
    <>
      {/*blog-area start*/}
      <div className='blog-area pd-top-115 pd-bottom-90'>
        <div className='container p-sm-0'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center'>
                <h4 className='subtitle'>LATEST BLOG</h4>
                <h2 className='title'>LATEST NEWS & ARTICLES</h2>
                <p className='content'>
                  Dramatically enhance interactive metrics for reliable
                  services. Proactively unleash fully researched e-commerce.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-inner'>
                <div className='thumb'>
                  <img src='assets/img/blog/1.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h4>
                    <Link to='/blog-details'>
                      Express delivery is going to slow down in 2022
                    </Link>
                  </h4>
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
                  </ul>
                  <Link className='read-more-text' to='/blog-details'>
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-inner'>
                <div className='thumb'>
                  <img src='assets/img/blog/2.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h4>
                    <Link to='/blog-details'>
                      USA exhibition support for teneso NewYork.
                    </Link>
                  </h4>
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
                  </ul>
                  <Link className='read-more-text' to='/blog-details'>
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-inner'>
                <div className='thumb'>
                  <img src='assets/img/blog/3.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h4>
                    <Link to='/blog-details'>
                      New Additions to our great Metro trucks.
                    </Link>
                  </h4>
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
                  </ul>
                  <Link className='read-more-text' to='/blog-details'>
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*blog-area end*/}
    </>
  );
};

export default BlogTwo;
