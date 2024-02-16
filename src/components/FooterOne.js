import React from "react";
import {
	FaArrowRight,
	FaFacebookF,
	FaLinkedinIn,
	FaPaperPlane,
	FaTwitter,
	FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import servicePages from "../utils/services";

const FooterOne = () => {
	return (
		<>
			{/* footer area start */}
			<footer className="footer-area">
				<div
					className="footer-top"
					style={{ backgroundImage: 'url("./assets/img/footer/bg.png")' }}
				>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-4 col-md-6">
								<div className="single-footer-top">
									<div className="icon">
										<img src="assets/img/icon/map-marker.png" alt="Pandurang Udyog Samuh" />
									</div>
									<div className="details">
										<h6>OFFICE ADDRESS:</h6>
										<p>2245 Gilbert Ave, Cincinnati,</p>
										<p>OH 45206, United States</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="single-footer-top">
									<div className="icon">
										<img src="assets/img/icon/phone.png" alt="Pandurang Udyog Samuh" />
									</div>
									<div className="details">
										<h6>CONTACT US:</h6>
										<p>info.logic@pandurang-udyog-samuh.com</p>
										<p>+1 800-226-4054</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="single-footer-top after-none">
									<div className="icon">
										<img src="assets/img/icon/clock.png" alt="Pandurang Udyog Samuh" />
									</div>
									<div className="details">
										<h6>WORKING HOURS:</h6>
										<p>Weekdays - Mon-Fri: 8am-21pm</p>
										<p>Weekend - Sta &amp; Sun: Closed</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
    <div className="row">
        <div className="col-xl-4 col-md-12 order-xl-1 order-md-1">
            <div className="widget widget_about">
                <div className="thumb">
                    <img src="assets/img/logo-white.png" alt="Pandurang Udyog Samuh" />
                </div>
                <div className="details">
                    <p>
                        Quickly supply alternative strategic theme areas vis-a-vis B2C mindshare.
                        Objectively repurpose stand-alone synergy via user-centric architectures.
                    </p>
                    <ul className="social-media style-border">
                        <li>
                            <a href="#">
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaWhatsapp />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-xl-4 col-md-12 offset-xl-4 order-xl-3 order-md-2">
            <div className="widget widget_nav_menu">
                <h4 className="widget-title">OUR SERVICES</h4>
                <ul>
                    {servicePages.map((service, index) => (
                        <li key={index}>
                            <FaArrowRight /> <Link to={`/service-details/${service.slug}`}>{service.name}</Link>
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
