import React from "react";

const TransportServiceArea = () => {
  return (
    <>
      {/* Transport service area start */}
      <div className='transport-service-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title  text-center'>
                <span className='subtitle'>Our Services</span>
                <h2 className='title'>What We Can Do For You</h2>
              </div>
            </div>
          </div>
          <div className='row transport-service-single'>
            <div className='col-lg-6'>
              <div className='transport-service-image wow fadeInLeft'>
                <img
                  src='assets/img/service/01.png'
                  className='img-fluid'
                  alt='transport-service images'
                />
                <div className='transport-service-item-hover'>
                  <a href='#'>
                    <div className='transport-service-link'>
                      <span className='fa fa-eye' />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 offset-lg-1 d-flex'>
              <div className='transport-service-content wow fadeInRight'>
                <h3 className='title'>Ocean Cargo</h3>
                <p>
                  Call park out she wife face mean. Invitation excellence
                  imprudence understood it continuing to. Ye show done an into.
                  Fifteen winding related may hearted colonel are way studied.
                  County suffer twenty or marked no moment in.
                </p>
                <div className='btn-wrapper animated fadeInUpBig text-left'>
                  <a href='#' className='boxed-btn blank'>
                    Contact for transport
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='row transport-service-single'>
            <div className='col-lg-6 offset-lg-1 order-lg-2'>
              <div className='transport-service-image wow fadeInRight'>
                <img
                  src='assets/img/service/02.png'
                  className='img-fluid'
                  alt='transport-service images'
                />
                <div className='transport-service-item-hover'>
                  <a href='#'>
                    <div className='transport-service-link'>
                      <span className='fa fa-eye' />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 offset-lg-1 d-flex '>
              <div className='transport-service-content wow fadeInLeft'>
                <h3 className='title'>Fly Anywhere</h3>
                <p>
                  Call park out she wife face mean. Invitation excellence
                  imprudence understood it continuing to. Ye show done an into.
                  Fifteen winding related may hearted colonel are way studied.
                  County suffer twenty or marked no moment in.
                </p>
                <div className='btn-wrapper animated fadeInUpBig text-left'>
                  <a href='#' className='boxed-btn blank'>
                    Contact for transport
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='row transport-service-single'>
            <div className='col-lg-6'>
              <div className='transport-service-image wow fadeInLeft'>
                <img
                  src='assets/img/service/03.png'
                  className='img-fluid'
                  alt='transport-service images'
                />
                <div className='transport-service-item-hover'>
                  <a href='#'>
                    <div className='transport-service-link'>
                      <span className='fa fa-eye' />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 offset-lg-1 d-flex'>
              <div className='transport-service-content wow fadeInRight'>
                <h3 className='title'>Cargo Storage</h3>
                <p>
                  Call park out she wife face mean. Invitation excellence
                  imprudence understood it continuing to. Ye show done an into.
                  Fifteen winding related may hearted colonel are way studied.
                  County suffer twenty or marked no moment in.
                </p>
                <div className='btn-wrapper animated fadeInUpBig text-left'>
                  <a href='#' className='boxed-btn blank'>
                    Contact for transport
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-2'>
              <div className='btn-wrapper animated fadeInUpBig text-center'>
                <a href='#' className='boxed-btn btn-bounce'>
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Transport service area end */}
    </>
  );
};

export default TransportServiceArea;
