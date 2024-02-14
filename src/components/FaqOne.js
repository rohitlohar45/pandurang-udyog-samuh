import React from "react";

const FaqOne = () => {
  return (
    <>
      {/*faq-area start*/}
      <div>
        <div className='container p-sm-0'>
          <div className='row'>
            <div className='col-xl-6 col-lg-5 order-lg-2'>
              <div className='thumb text-center mb-4 mb-lg-0'>
                <img src='assets/img/faq/1.png' alt='Transpro' />
              </div>
            </div>
            <div className='col-xl-6 col-lg-7 order-lg-1'>
              <div className='section-title'>
                <h4 className='subtitle'>FAQ</h4>
                <h2 className='title'>FREQUENTLY ASKED ANY QUESTION</h2>
                <p className='content'>
                  Progressively utilize integrated bandwidth via vertical
                  relationships. Objectively impact emerging human capital via
                  tactical methods of empowerment.
                </p>
              </div>
              <div className='accordion faq-accordion' id='accordionExample'>
                <div className='accordion-item single-accordion-inner'>
                  <h2 className='accordion-header' id='headingOne'>
                    <button
                      className='accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      <span>1.</span> Is it Full Transport &amp; Logistics
                      Company?
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      Professionally disseminate highly efficient human capital
                      through optimal technology. Distinctively enhance tactical
                      data and innovative content.
                    </div>
                  </div>
                </div>
                <div className='accordion-item single-accordion-inner'>
                  <h2 className='accordion-header' id='headingTwo'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      <span>2.</span> How to Create my Project in Company?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingTwo'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      Professionally disseminate highly efficient human capital
                      through optimal technology. Distinctively enhance tactical
                      data and innovative content.
                    </div>
                  </div>
                </div>
                <div className='accordion-item single-accordion-inner mb-0'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      <span>3.</span> How to Work in Process of Transport
                      Company?
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      Professionally disseminate highly efficient human capital
                      through optimal technology. Distinctively enhance tactical
                      data and innovative content.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*faq-area end*/}
    </>
  );
};

export default FaqOne;
