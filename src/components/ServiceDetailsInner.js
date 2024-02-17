import React, { useState } from "react";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaPlay,
  FaRegEnvelope,
  FaRegFileAlt,
  FaRegFilePdf,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import servicePages from "../utils/services";
import serviceContent from "../utils/serviceDetails";
import Events from "./Events";
const ServiceDetailsInner = ({ service }) => {
  const [isOpen, setOpen] = useState(false);
  const details = serviceContent[service];
  const information = details.information;
  const supportInfo = details.support;
  const eventInfo = details.events;
  return (
    <>
      <div className="service-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="service-details-wrap">
                <div className="thumb">
                  <img src={information.image1} alt="image1" />
                  <div className="icon">
                    <img src={information.image2} alt="image2" />
                  </div>
                </div>
                <h2>{information?.title}</h2>
                <p>{information?.description1}</p>
                <p>{information?.description2}</p>
                <p>{information?.description3}</p>
                <p className="last-para">{information?.description4}</p>
              </div>
              <Events />
            </div>
            <div className="col-lg-4">
              <div className="sidebar-area">
                <div className="widget widget_catagory">
                  <h4 className="widget-title">
                    SERVICE LIST
                    <span className="dot" />
                  </h4>
                  <ul className="catagory-items">
                    {servicePages.map((service, index) => (
                      <li key={index}>
                        <Link to={`/service-details/${service.slug}`}>
                          {service.name}{" "}
                          <span>
                            <FaArrowRight />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="widget widget_support text-center mb-0"
                  style={{
                    background: "url(assets/img/widget/support-bg.png)",
                  }}
                >
                  <h4 className="widget-title style-white">
                    24/7 ONLINE SUPPORT <span className="dot" />
                  </h4>
                  <p>{supportInfo.description}</p>
                  <p className="contact">
                    <FaRegEnvelope />
                    {supportInfo.email}
                  </p>
                  <p className="contact mb-0">
                    <FaPhoneAlt />
                    {supportInfo.phoneNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsInner;
