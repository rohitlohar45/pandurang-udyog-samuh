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

const FooterOne = ({ logo = null, onLoad = null }) => {
	return (
		<>
			<footer className="footer-area">
				<div
					className="footer-top"
					style={{ backgroundImage: 'url("./assets/img/footer/bg.png")' }}
				></div>
				<div className="container">
					<div className="row">
						<div className="col-xl-4 col-md-12 order-xl-1 order-md-1">
							<div className="widget widget_about">
								<div className="thumb">
									<img
										onLoad={onLoad}
										src={logo ? logo : "assets/img/logo-2.png"}
										alt="Pandurang Udyog Samuh"
									/>
								</div>
								<div className="details">
									<p>
										Explore our diverse services at Pandurang Enterprises, including cold storage
										solutions, fruit supply to major clients, agricultural technologies, fuel
										services, and construction materials. Your satisfaction is our priority
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-12 offset-xl-4 order-xl-3 order-md-2">
							<div className="widget widget_nav_menu">
								<h4 className="widget-title">OUR SERVICES</h4>
								<ul>
									{servicePages.map((service, index) => (
										<li key={index}>
											<FaArrowRight />
											<Link to={`/service-details/${service.slug}`}>{service.name}</Link>
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
