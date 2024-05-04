import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const FooterOne = ({ logo = null, onLoad = null }) => {
  const { servicePages } = useAppContext();
  return (
    <>
      <footer className="footer-area">
        <div
          className="footer-top"
          style={{ backgroundImage: 'url("./assets/img/footer/bg.png")' }}
        ></div>
        <div className="container">
          <div className="row">
            {/* Column for logo and contact details */}
            <div className="col-md-4">
              <div className="widget widget_about">
                <div className="thumb" style={{ marginTop: "-20px" }}>
                  <img
                    onLoad={onLoad}
                    src={logo ? logo : "assets/img/logo-2.png"}
                    alt="Pandurang Udyog Samuh"
                  />
                </div>
                <div className="details">
                  <Flex
                    alignItems="flex-start"
                    color="white"
                    flexDirection="column"
                  >
                    <Flex alignItems="center" mb={2}>
                      <Icon
                        as={MdLocationOn}
                        boxSize={6}
                        style={{ marginBottom: "24px" }}
                      />
                      <Text ml={2}>
                        A/p. KandarTal. KarmalaDist. Solapur, Maharashtra, India
                      </Text>
                    </Flex>
                    <Flex alignItems="center" mb={2}>
                      <Icon
                        as={MdPhone}
                        boxSize={6}
                        style={{ marginBottom: "24px" }}
                      />
                      <Text ml={2}>+91 9096519555</Text>
                    </Flex>
                    <Flex alignItems="center" mb={2}>
                      <Icon
                        as={MdEmail}
                        boxSize={6}
                        style={{ marginBottom: "24px" }}
                      />
                      <Text ml={2}>dadasahebpatil25@gmail.com</Text>
                    </Flex>
                  </Flex>
                </div>
              </div>
            </div>
            {/* Column for the details */}
            <div className="col-md-4">
              <div className="widget widget_details">
                <h4 className="widget-title">SOCIAL LINKS</h4>
                <p className="paragraph-text">
                  Explore our diverse services at Pandurang Udyog Samuh,
                  including cold storage solutions, fruit supply to major
                  clients, agricultural technologies, fuel services, and
                  construction materials. Your satisfaction is our priority.
                </p>
                {/* Social media icons */}
                <div className="social-icons-container">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaFacebook size={24} color="white" />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaTwitter size={24} color="white" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaInstagram size={24} color="white" />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaLinkedin size={24} color="white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Column for services */}
            <div className="col-md-4">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">OUR SERVICES</h4>
                <ul>
                  {servicePages?.map((service, index) => (
                    <li key={index}>
                      <Flex alignItems="center">
                        <FaArrowRight style={{ marginBottom: "4px" }} />
                        <Link to={`/service-details/${service.slug}`}>
                          {service.name}
                        </Link>
                      </Flex>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
