import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <>
      {/* breadcrumb start */}
      <div
        className='breadcrumb-area bg-overlay-2'
        style={{ backgroundImage: 'url("assets/img/banner/breadcrumb.png")' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='breadcrumb-inner'>
                <div className='section-title mb-0'>
                  <h2 className='page-title'>{title}</h2>
                  <ul className='page-list'>
                    <li>
                      <Link to='/'>HOME</Link>
                    </li>{" "}
                    /<li className='ps-0'>{title}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb end */}
    </>
  );
};

export default Breadcrumb;
