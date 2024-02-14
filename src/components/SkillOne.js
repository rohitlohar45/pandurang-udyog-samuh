import React from "react";

const SkillOne = () => {
  return (
    <>
      {/*skill-area start*/}
      <div
        className='skill-area pd-top-120 pd-bottom-120'
        style={{ background: "#f9f9f9" }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6 order-lg-2'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='thumb'>
                    <img
                      className='w-100'
                      src='assets/img/about/5.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='thumb img-2'>
                    <img
                      className='w-100'
                      src='assets/img/about/6.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 order-lg-1'>
              <div className='section-title mt-lg-0 mt-5'>
                <h4 className='subtitle style-2'>OUR SKILLS</h4>
                <h2 className='title'>WHY CHOOSE FOR US?</h2>
                <p>
                  Globally foster client-centered convergence through accurate
                  deliverables. Synergistically actualize transparent.
                </p>
              </div>
              <div className='skill-progress-area'>
                <div className='single-progressbar'>
                  <div className='title' style={{ width: "85%" }}>
                    <h6>Cargo Freight</h6>
                    <div className='progress-count-wrap'>
                      <span className='progress-count counting' data-count={85}>
                        85
                      </span>
                      <span className='counting-icons'>%</span>
                    </div>
                  </div>
                  <div className='progress-item' id='progress-running'>
                    <div className='progress-bg'>
                      <div
                        id='progress'
                        className='progress-rate'
                        data-value={85}
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className='single-progressbar'>
                  <div className='title' style={{ width: "80%" }}>
                    <h6>Air Freight</h6>
                    <div className='progress-count-wrap'>
                      <span className='progress-count counting' data-count={80}>
                        80
                      </span>
                      <span className='counting-icons'>%</span>
                    </div>
                  </div>
                  <div className='progress-item' id='progress-running-1'>
                    <div className='progress-bg'>
                      <div
                        id='progress-1'
                        className='progress-rate'
                        data-value={80}
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className='single-progressbar'>
                  <div className='title' style={{ width: "90%" }}>
                    <h6>Road Freight</h6>
                    <div className='progress-count-wrap'>
                      <span className='progress-count counting' data-count={90}>
                        90
                      </span>
                      <span className='counting-icons'>%</span>
                    </div>
                  </div>
                  <div className='progress-item' id='progress-running-2'>
                    <div className='progress-bg'>
                      <div
                        id='progress-2'
                        className='progress-rate'
                        data-value={90}
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className='single-progressbar'>
                  <div className='title' style={{ width: "75%" }}>
                    <h6>Train Freight</h6>
                    <div className='progress-count-wrap'>
                      <span className='progress-count counting' data-count={75}>
                        75
                      </span>
                      <span className='counting-icons'>%</span>
                    </div>
                  </div>
                  <div className='progress-item mb-0' id='progress-running-3'>
                    <div className='progress-bg'>
                      <div
                        id='progress-3'
                        className='progress-rate'
                        data-value={75}
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*skill-area end*/}
    </>
  );
};

export default SkillOne;
