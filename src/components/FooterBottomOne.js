import React from "react";

const FooterBottomOne = () => {
  return (
    <>
      {/* footer-bottom area start */}
      <div className='footer-bottom-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 text-lg-start text-center'>
              <div className='copyright-area'>
                <p>
                  © Copyright 2022 By <a href='#'>TransPro</a>, All right
                  reserved.
                </p>
              </div>
            </div>
            <div className='col-lg-6 text-lg-end text-center'>
              <ul>
                <li>
                  <a href='#'>Terms &amp; Condition</a>
                </li>
                <li>
                  <a href='#'>Privacy &amp; Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* footer-bottom area end */}
    </>
  );
};

export default FooterBottomOne;
