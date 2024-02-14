import React from "react";

const Preloader = () => {
  return (
    <>
      {/* preloader area start */}
      <div className='preloader' id='preloader'>
        <div className='preloader-inner'>
          <div className='spinner'>
            <div className='dot1' />
            <div className='dot2' />
          </div>
        </div>
      </div>
      {/* preloader area end */}
    </>
  );
};

export default Preloader;
