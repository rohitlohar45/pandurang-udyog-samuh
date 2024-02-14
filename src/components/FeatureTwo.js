import React from "react";
import {
  FaMoneyBillAlt,
  FaShieldAlt,
  FaToolbox,
  FaTruckMoving,
} from "react-icons/fa";

const FeatureTwo = () => {
  return (
    <>
      {/* Start Our Features area  */}
      <div
        className='features-area-2'
        style={{
          backgroundImage: 'url("assets/img/bg/feature-bg.png")',
        }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-6'>
              <div className='features-item'>
                <div className='single-features-item'>
                  <div className='icon'>
                    <FaMoneyBillAlt />
                  </div>
                  <h4>Transparent Pricing</h4>
                </div>
                <div className='single-features-item'>
                  <div className='icon'>
                    <FaToolbox />
                  </div>
                  <h4>Warehouse Storage</h4>
                </div>
                <div className='single-features-item'>
                  <div className='icon'>
                    <FaTruckMoving />
                  </div>
                  <h4>Real-Time Tracking</h4>
                </div>
                <div className='single-features-item'>
                  <div className='icon'>
                    <FaShieldAlt />
                  </div>
                  <h4>Security For Cargo</h4>
                </div>
              </div>
            </div>
            <div className='col-xl-6 d-flex'>
              <div className='section-title white  text-left m-auto'>
                <span className='subtitles'>Our Features</span>
                <h2 className='title active'>Why Choose Us!</h2>
                <p>
                  Affronting everything discretion men now own did. Still round
                  match we to. Frankness pronounce daughters remainder extensive
                  has but. Happiness cordially one determine concluded fat.
                  Plenty season beyond by hardly giving of. Consulted or
                  acuteness dejection an smallness if. Outward general passage
                  another as it. Affronting everything discretion men now own
                  did. Still round match we to. Frankness pronounce daughters
                  remainder extensive has but. Building mr concerns servants in
                  he outlived am breeding.He so lain good miss when sell some at
                  if.
                </p>
                <div className='btn-wrapper animated fadeInUpBig text-left'>
                  <a href='#' className='btn-bounce'>
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Our Features area  */}
    </>
  );
};

export default FeatureTwo;
