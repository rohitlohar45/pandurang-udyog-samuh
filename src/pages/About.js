import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() => import("../components/FooterBottomOne"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const Navbar = React.lazy(() => import("../components/Navbar"));
const TeamOne = React.lazy(() => import("../components/TeamOne"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const About = () => {
	return (
		<>
			<Fragment>
				<Suspense fallback={<Preloader />}>
					{/* Search Popup */}
					<SearchPopup />

					{/* Navbar One */}
					<Navbar />

					{/* Breadcrumb */}
					<Breadcrumb title={"ABOUT US"} />

					{/* About One */}
					<div className="pd-top-120 pd-bottom-120">
						<AboutOne />
					</div>
					<div className="about-section">
						<div className="container">
							<div className="about-content">
								<h2 className="section-title">About Pandurang Udyog Samuh</h2>
								<p className="mission-statement">
									Pandurang Udyog Samuh is dedicated to revolutionizing the industrial landscape by
									providing innovative solutions that drive growth, efficiency, and sustainability.
									Our mission is to empower businesses with high-quality products, exceptional
									services, and unwavering commitment to excellence.
								</p>
								<div className="values">
									<h3>Our Values</h3>
									<ul>
										<li>
											Integrity: We conduct our business with the highest standards of integrity,
											honesty, and transparency.
										</li>
										<li>
											Quality: We are committed to delivering products and services of the highest
											quality that meet or exceed industry standards.
										</li>
										<li>
											Innovation: We continuously innovate and adapt to emerging technologies and
											market trends to stay ahead of the curve.
										</li>
										<li>
											Customer Focus: Our customers are at the heart of everything we do. We strive
											to understand their needs and exceed their expectations.
										</li>
										<li>
											Teamwork: We foster a culture of collaboration, respect, and teamwork, where
											every member is valued and empowered to contribute to our collective success.
										</li>
									</ul>
								</div>
								<h3>Our Products and Services</h3>
								<p>
									Pandurang Udyog Samuh offers a comprehensive range of industrial solutions
									tailored to meet the diverse needs of our clients. We specialize in manufacturing
									high-quality industrial equipment, machinery, and components. Our distribution
									network ensures timely delivery of products to customers across various
									industries. Additionally, we provide expert engineering services, including
									design, installation, maintenance, and repair of industrial systems and equipment.
									Our team of industry experts also offers consulting services to help businesses
									optimize their operations, improve efficiency, and achieve their strategic
									objectives.
								</p>
								<h3>Why Choose Us?</h3>
								<ul>
									<li>
										Experience: With decades of industry experience, we bring unparalleled expertise
										and insight to every project.
									</li>
									<li>
										Quality Assurance: We adhere to stringent quality control measures to ensure
										that our products and services meet the highest standards of excellence.
									</li>
									<li>
										Customer Satisfaction: We prioritize customer satisfaction and are committed to
										building long-term relationships based on trust, reliability, and mutual
										respect.
									</li>
									<li>
										Innovation and Adaptability: We embrace innovation and leverage cutting-edge
										technologies to deliver solutions that drive growth and sustainability.
									</li>
									<li>
										Value Proposition: Our competitive pricing, efficient processes, and
										personalized service ensure maximum value for our customers.
									</li>
								</ul>
								<p>
									Experience the Pandurang Udyog Samuh difference and unlock the full potential of
									your business. Contact us today to discuss your industrial needs and discover how
									we can help you achieve your goals.
								</p>
							</div>
						</div>
					</div>
					{/* Team One */}
					<div className="pd-bottom-80">
						<TeamOne />
					</div>

					{/* Footer One */}
					<FooterOne />

					{/* Footer Bottom One */}
					<FooterBottomOne />
				</Suspense>
			</Fragment>
		</>
	);
};

export default About;
