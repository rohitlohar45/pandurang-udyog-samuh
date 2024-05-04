import React from "react";

const AboutTwo = () => {
  return (
    <>
      {/* about area start */}
      <div className="about-area">
        <div className="container">
          <div className="about-area-inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-thumb-wrap">
                  {/* First image */}
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/About%20Us%2FIMG_4118.jpg?alt=media&token=f511da8a-0f62-4d3f-bfd4-7a107c67436d"
                    alt="Image 1"
                    className="img-fluid mb-4"
                  />
                  {/* Wrap the remaining images in a container */}
                  <div className="image-container mb-4">
                    {/* Second row */}
                    <div className="row mb-4">
                      <div className="col-6">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/About%20Us%2FIMG_9065.PNG?alt=media&token=fc67f56c-493c-418c-9eb0-8f9060da1363"
                          alt="Image 2"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-6">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/About%20Us%2F68234a9c-1b5c-4df9-a760-3d73b1431f7a.jpg?alt=media&token=768f0c40-ac70-4eda-8d91-93a49aad637f"
                          alt="Image 1"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    {/* Third row */}
                    <div className="row">
                      <div className="col-6">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/About%20Us%2FIMG_8093.jpg?alt=media&token=1f675bbb-c4d0-4a65-9474-476e2e606667"
                          alt="Image 4"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-6">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/About%20Us%2FIMG_8062.jpg?alt=media&token=6688744d-d592-4ff5-ae39-e467c0279823"
                          alt="Image 3"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6  align-self-start">
                {/* Content section */}
                <div className="about-inner-wrap">
                  <div className="section-title mb-0">
                    <h4 className="subtitle">About Pandurang Udyog Samuh</h4>
                    <p>
                      Pandurang Udyog Samuh is dedicated to revolutionizing the
                      industrial landscape by providing innovative solutions
                      that drive growth, efficiency, and sustainability. Our
                      mission is to empower businesses with high-quality
                      products, exceptional services, and unwavering commitment
                      to excellence.
                    </p>
                    <h4 className="subtitle">Our Values</h4>
                    <ul>
                      <li>
                        <strong>Integrity:</strong> We conduct our business with
                        the highest standards of integrity, honesty, and
                        transparency.
                      </li>
                      <li>
                        <strong>Quality:</strong> We are committed to delivering
                        products and services of the highest quality that meet
                        or exceed industry standards.
                      </li>
                      <li>
                        <strong>Innovation:</strong> We continuously innovate
                        and adapt to emerging technologies and market trends to
                        stay ahead of the curve.
                      </li>
                      <li>
                        <strong>Customer Focus:</strong> Our customers are at
                        the heart of everything we do. We strive to understand
                        their needs and exceed their expectations.
                      </li>
                      <li>
                        <strong>Teamwork:</strong> We foster a culture of
                        collaboration, respect, and teamwork, where every member
                        is valued and empowered to contribute to our collective
                        success.
                      </li>
                    </ul>
                    <h4 className="subtitle">Our Products and Services</h4>
                    <p>
                      Pandurang Udyog Samuh offers a comprehensive range of
                      industrial solutions tailored to meet the diverse needs of
                      our clients. We specialize in manufacturing high-quality
                      industrial equipment, machinery, and components. Our
                      distribution network ensures timely delivery of products
                      to customers across various industries. Additionally, we
                      provide expert engineering services, including design,
                      installation, maintenance, and repair of industrial
                      systems and equipment. Our team of industry experts also
                      offers consulting services to help businesses optimize
                      their operations, improve efficiency, and achieve their
                      strategic objectives.
                    </p>
                    <h4 className="subtitle">Why Choose Us?</h4>
                    <ul>
                      <li>
                        <strong>Experience:</strong> With decades of industry
                        experience, we bring unparalleled expertise and insight
                        to every project.
                      </li>
                      <li>
                        <strong>Quality Assurance:</strong> We adhere to
                        stringent quality control measures to ensure that our
                        products and services meet the highest standards of
                        excellence.
                      </li>
                      <li>
                        <strong>Customer Satisfaction:</strong> We prioritize
                        customer satisfaction and are committed to building
                        long-term relationships based on trust, reliability, and
                        mutual respect.
                      </li>
                      <li>
                        <strong>Innovation and Adaptability:</strong> We embrace
                        innovation and leverage cutting-edge technologies to
                        deliver solutions that drive growth and sustainability.
                      </li>
                      <li>
                        <strong>Value Proposition:</strong> Our competitive
                        pricing, efficient processes, and personalized service
                        ensure maximum value for our customers.
                      </li>
                    </ul>
                    {/* <p>
                      Experience the Pandurang Udyog Samuh difference and unlock
                      the full potential of your business. Contact us today to
                      discuss your industrial needs and discover how we can help
                      you achieve your goals.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTwo;
