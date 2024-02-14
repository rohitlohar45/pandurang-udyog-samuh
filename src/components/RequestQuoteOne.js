import React from "react";
import { Link } from "react-router-dom";

const RequestQuoteOne = () => {
  return (
    <>
      {/*request-quote-area start*/}
      <div className='request-quote-area'>
        <div className='container'>
          <div className='request-quote-inner'>
            <ul className='nav nav-pills' id='pills-tab' role='tablist'>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link active'
                  id='pills-home-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-home'
                  type='button'
                  role='tab'
                  aria-controls='pills-home'
                  aria-selected='true'
                >
                  <img src='assets/img/request-quote/1.png' alt='Transpro' />
                  REQUEST A QUOTE
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link'
                  id='pills-profile-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-profile'
                  type='button'
                  role='tab'
                  aria-controls='pills-profile'
                  aria-selected='false'
                >
                  <img src='assets/img/request-quote/2.png' alt='' /> TRACK
                  &amp; TRACE
                </button>
              </li>
            </ul>
            <div className='tab-content' id='pills-tabContent'>
              <div
                className='tab-pane fade show active'
                id='pills-home'
                role='tabpanel'
                aria-labelledby='pills-home-tab'
              >
                <div className='row'>
                  <div className='col-lg-8'>
                    <h6 className='subtitle'>Personal Information :</h6>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Name' />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Email' />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Phone Number' />
                        </div>
                      </div>
                    </div>
                    <h6 className='subtitle mt-4'>Shipment Information :</h6>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <div className='single-select-inner style-border'>
                          <select className='single-select'>
                            <option>Freight Type</option>
                            <option value={1}>Some option</option>
                            <option value={2}>Another option</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='City of Departure' />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Delivery City' />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='single-select-inner style-border'>
                          <select className='single-select'>
                            <option>Incotems</option>
                            <option value={1}>Some option</option>
                            <option value={2}>Another option</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-xl-4 col-lg-8'>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <div className='single-input-inner style-border'>
                              <input type='text' placeholder='Weight' />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='single-input-inner style-border'>
                              <input type='text' placeholder='Height' />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-4 col-lg-12'>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <div className='single-input-inner style-border'>
                              <input type='text' placeholder='Weight' />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='single-input-inner style-border'>
                              <input type='text' placeholder='Height' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className='single-check-list'>
                      <li>
                        <div className='form-check single-check-wrap'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            defaultValue=''
                            id='flexCheckDefault'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='flexCheckDefault'
                          >
                            Freight
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className='form-check single-check-wrap'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            defaultValue=''
                            id='flexCheckDefault1'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='flexCheckDefault1'
                          >
                            Packaging
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className='form-check single-check-wrap'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            defaultValue=''
                            id='flexCheckDefault2'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='flexCheckDefault2'
                          >
                            Express Delivery
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className='form-check single-check-wrap'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            defaultValue=''
                            id='flexCheckDefault3'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='flexCheckDefault3'
                          >
                            Road Freight
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className='form-check single-check-wrap'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            defaultValue=''
                            id='flexCheckDefault4'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='flexCheckDefault4'
                          >
                            Air Freight
                          </label>
                        </div>
                      </li>
                    </ul>
                    <a className='btn btn-base w-100' href='#'>
                      REQUEST A QUOTE
                    </a>
                  </div>
                  <div className='col-lg-4 align-self-end'>
                    <div
                      className='quote-wrap'
                      style={{ background: "var(--main-color)" }}
                    >
                      <h4>How Can We Help You!</h4>
                      <p>
                        Completely transform sticky ideas without leveraged
                        quality vectors. Continually negotiate compelling
                        partnerships before granular customer service.
                        Objectively.
                      </p>
                      <Link className='btn btn-white' to='/contact'>
                        CONTACT US
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='pills-profile'
                role='tabpanel'
                aria-labelledby='pills-profile-tab'
              >
                <div className='row'>
                  <div className='col-lg-8'>
                    <h6 className='subtitle'>Personal Information :</h6>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Name' />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Email' />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Phone Number' />
                        </div>
                      </div>
                    </div>
                    <h6 className='subtitle mt-4'>Shipment Information :</h6>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <div className='single-select-inner style-border'>
                          <select className='single-select'>
                            <option>Freight Type</option>
                            <option value={1}>Some option</option>
                            <option value={2}>Another option</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='City of Departure' />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Delivery City' />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='single-select-inner style-border'>
                          <select className='single-select'>
                            <option>Incotems</option>
                            <option value={1}>Some option</option>
                            <option value={2}>Another option</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-xl-4 col-lg-8'>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <div className='single-input-inner style-border'>
                              <input type='text' placeholder='Weight' />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='single-input-inner style-border'>
                              <input type='text' placeholder='Height' />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-4 col-lg-12'>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <div className='single-input-inner style-border'>
                              <input type='text' placeholder='Weight' />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='single-input-inner style-border'>
                              <input type='text' placeholder='Height' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className='single-check-list'>
                      <li>
                        <div className='form-check single-check-wrap'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            defaultValue=''
                            id='flexCheckDefault6'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='flexCheckDefault6'
                          >
                            Freight
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className='form-check single-check-wrap'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            defaultValue=''
                            id='flexCheckDefault7'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='flexCheckDefault7'
                          >
                            Packaging
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className='form-check single-check-wrap'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            defaultValue=''
                            id='flexCheckDefault8'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='flexCheckDefault8'
                          >
                            Express Delivery
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className='form-check single-check-wrap'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            defaultValue=''
                            id='flexCheckDefault9'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='flexCheckDefault9'
                          >
                            Road Freight
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className='form-check single-check-wrap'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            defaultValue=''
                            id='flexCheckDefault10'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='flexCheckDefault10'
                          >
                            Air Freight
                          </label>
                        </div>
                      </li>
                    </ul>
                    <a className='btn btn-base w-100' href='#'>
                      REQUEST A QUOTE
                    </a>
                  </div>
                  <div className='col-lg-4 align-self-end'>
                    <div
                      className='quote-wrap'
                      style={{ background: "var(--main-color)" }}
                    >
                      <h4>How Can We Help You!</h4>
                      <p>
                        Completely transform sticky ideas without leveraged
                        quality vectors. Continually negotiate compelling
                        partnerships before granular customer service.
                        Objectively.
                      </p>
                      <Link className='btn btn-white' to='/contact'>
                        CONTACT US
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*request-quote-area end*/}
    </>
  );
};

export default RequestQuoteOne;
