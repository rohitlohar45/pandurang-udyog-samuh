import React from "react";

const ShipmentTwo = () => {
  return (
    <>
      {/* Start Our Shipment area  */}
      <div className='shipment-area style-02'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 d-flex'>
              <div className='section-title text-left m-auto'>
                <span className='subtitles'>Experience</span>
                <h2 className='title'>
                  We Have More Then 15 Year Experience In Transport
                </h2>
                <p>
                  Affronting everything discretion men now own did. Still round
                  match we to. Frankness pronounce daughters remainder extensive
                  has but. Happiness cordially one determine concluded fat.
                  Plenty season beyond by hardly giving of. Consulted or
                  acuteness dejection an smallness if. Outward general passage
                  another as it.
                </p>
                <div className='btn-wrapper animated fadeInUpBig text-left'>
                  <a href='#' className='boxed-btn btn-bounce mt-3'>
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='shipment-form-wrap'>
                <h3 className='title'>Services Calculator</h3>
                <form id='shipment-form'>
                  <div className='personal-data'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <h4>Personal Data</h4>
                      </div>
                      <div className='col-lg-4'>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            name='name'
                            id='name'
                            placeholder='Name'
                            required=''
                          />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='form-group'>
                          <input
                            type='email'
                            className='form-control'
                            name='email'
                            id='email'
                            placeholder='Email'
                            required=''
                          />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='form-group'>
                          <input
                            type='number'
                            className='form-control'
                            name='phone'
                            id='phone'
                            placeholder='Phone'
                            required=''
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='shipment-date'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <h4>Shipment Date</h4>
                      </div>
                      <div className='col-lg-4'>
                        <div className='form-group'>
                          <select
                            title='Please choose'
                            className='form-control custom-select'
                            name='package1'
                            aria-required='true'
                            aria-invalid='false'
                          >
                            <option value=''>Freight Type</option>
                            <option value='Type 1'>Type 1</option>
                            <option value='Type 2'>Type 2</option>
                            <option value='Type 3'>Type 3</option>
                            <option value='Type 4'>Type 4</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='form-group'>
                          <select
                            title='Please choose'
                            className='form-control custom-select'
                            name='package2'
                            aria-required='true'
                            aria-invalid='false'
                          >
                            <option value=''>City of Department</option>
                            <option value='london'>London</option>
                            <option value='california'>California</option>
                            <option value='dhaka'>Dhaka</option>
                            <option value='new york'>New york</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='form-group'>
                          <select
                            title='Please choose'
                            className='form-control custom-select'
                            name='package3'
                            aria-required='true'
                            aria-invalid='false'
                          >
                            <option value=''>Delivery City</option>
                            <option value=''>City of Department</option>
                            <option value='london'>London</option>
                            <option value='california'>California</option>
                            <option value='dhaka'>Dhaka</option>
                            <option value='new york'>New york</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            name='incoterms'
                            id='incoterms'
                            placeholder='Incoterms'
                            required=''
                          />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            name='height'
                            id='height'
                            placeholder='Height'
                            required=''
                          />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            name='length'
                            id='length'
                            placeholder='Length'
                            required=''
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='submit-shipment'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='shipment-process'>
                          <div className='form-group'>
                            <input
                              type='radio'
                              className='form-radio'
                              id='process1'
                              name='radio-group'
                              defaultChecked=''
                            />
                            <label htmlFor='process1'>Fragile</label>
                            <input
                              type='radio'
                              className='form-radio'
                              id='process2'
                              name='radio-group'
                              defaultChecked=''
                            />
                            <label htmlFor='process2'>Express Delivery</label>
                            <input
                              type='radio'
                              className='form-radio'
                              id='process3'
                              name='radio-group'
                              defaultChecked=''
                            />
                            <label htmlFor='process3'>Insurance</label>
                            <input
                              type='radio'
                              className='form-radio'
                              id='process4'
                              name='radio-group'
                              defaultChecked=''
                            />
                            <label htmlFor='process4'>Packaging</label>
                          </div>
                        </div>
                        <div className='form-group '>
                          <button type='submit' className='shipment-btn'>
                            {" "}
                            Request a Quite{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Our Shipment area  */}
    </>
  );
};

export default ShipmentTwo;
