import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceOne = () => {
  return (
    <>
      {/* service area start */}
      <div
        className='service-area pd-top-115 pd-bottom-90 pb-lg-0'
        style={{ background: "url(assets/img/service/bg.png)" }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='section-title text-center'>
                <h4 className='subtitle style-2'>SERVICES</h4>
                <h2 className='title'>OUR SERVICE FOR YOU</h2>
                <p>
                   Explore our diverse services at Pandurang Enterprises, including cold storage solutions, fruit supply to major clients, agricultural technologies, fuel services, and construction materials. Your satisfaction is our priority.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/1.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-1.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>Pan Exports Cold Storage</h5>
                  <p>
                  APEDA-approved cold storage with 2000 metric ton capacity, featuring pre-cooling and 10 cold chambers, powered by eco-friendly solar panels.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details/pan-exports-cold-storage'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/2.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-2.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>Pandurang Agro Industries Cold Storage</h5>
                  <p>   
                   APEDA-approved pack house specializing in enhancing banana packaging quality and quantity, with a daily 100-ton capacity.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details/pandurang-agro-industries-cold-storage'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/3.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-3.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>DP Fruit Suppliers (Reliance, INI, SK)</h5>
                  <p>
                    17 year veteran supplying banana packaging to DP Fruit & major chains (Reliance Fresh, INI, Desai, S K). 
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details/dp-fruit-suppliers-reliance-ini-sk'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ServiceOne;
