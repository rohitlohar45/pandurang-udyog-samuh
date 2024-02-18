import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const FeatureOne = () => {
	function SampleNextArrow(props) {
		const { className, onClick } = props;
		return <FaArrowLeft className={className} onClick={onClick} />;
	}
	function SamplePrevArrow(props) {
		const { className, onClick } = props;
		return <FaArrowRight className={className} onClick={onClick} />;
	}
	const settings = {
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 5000,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: false,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	};
	return (
		<>
			{/* feature area start */}
			<div className="container">
				<div className="feature-area mb-60">
					<div className="row">
						<div className="col-lg-4">
							<div className="section-title mb-0">
								<h4 className="subtitle">SERVICES</h4>
								<h2 className="title">OUR SERVICE FOR YOU</h2>
							</div>
						</div>
						<div className="col-lg-6 align-self-center">
							<div className="section-title">
								<p className="content left-line">
									Explore our diverse services at Pandurang Enterprises, including cold storage
									solutions, fruit supply to major clients, agricultural technologies, fuel
									services, and construction materials. Your satisfaction is our priority
								</p>
							</div>
						</div>
					</div>
					<div className="feature-slider owl-carousel">
						<Slider {...settings}>
							<div className="item">
								<div className="feature-wrap bg-pink">
									<div className="icon">
										<img src="assets/img/icon/feature-1.png" alt="PAUS" />
									</div>
									<h5>Pandurang Krushi Udyog Banana Tissue Drip</h5>
									<p>
										We offer premium banana tissue plants & essential farm supplies (fertilizers,
										irrigation, & solar) partnered with leading brands like Jain & Yara.
									</p>
									<div className="btn-wrap">
										<Link
											className="read-more-text"
											to="/service-details/pandurang-krushi-udyog-banana-tissue-drip"
										>
											READ MORE{" "}
											<span>
												<FaArrowRight />
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="feature-wrap bg-ash">
									<div className="icon">
										<img src="assets/img/icon/feature-2.png" alt="PAUS" />
									</div>
									<h5>DP Fruit Suppliers (Reliance, INI, SK)</h5>
									<p>
										17 year veteran supplying banana packaging to DP Fruit & major chains (Reliance
										Fresh, INI, Desai, S K).
									</p>
									<div className="btn-wrap">
										<Link
											className="read-more-text"
											to="/service-details/dp-fruit-suppliers-reliance-ini-sk"
										>
											READ MORE{" "}
											<span>
												<FaArrowRight />
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="feature-wrap bg-sky">
									<div className="icon">
										<img src="assets/img/icon/feature-3.png" alt="PAUS" />
									</div>
									<h5>Pandurang Agro Industries Cold Storage</h5>
									<p>
										APEDA-approved pack house specializing in enhancing banana packaging quality and
										quantity, with a daily 100-ton capacity.
									</p>
									<div className="btn-wrap">
										<Link
											className="read-more-text"
											to="/service-details/pandurang-agro-industries-cold-storage"
										>
											READ MORE{" "}
											<span>
												<FaArrowRight />
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="feature-wrap bg-ash">
									<div className="icon">
										<img src="assets/img/icon/feature-2.png" alt="PAUS" />
									</div>
									<h5>PAN EXPORTS (Cold Storage)</h5>
									<p>
										APEDA-approved cold storage with 2000 metric ton capacity, featuring pre-cooling
										and 10 cold chambers, powered by eco-friendly solar panels.
									</p>
									<div className="btn-wrap">
										<Link className="read-more-text" to="/service-details/pan-exports-cold-storage">
											READ MORE{" "}
											<span>
												<FaArrowRight />
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="feature-wrap bg-pink">
									<div className="icon">
										<img src="assets/img/icon/feature-1.png" alt="PAUS" />
									</div>
									<h5>Pandurang Petroleum Services HP Dealer</h5>
									<p>
										Pandurang Petroleum Services is an authorized HP dealer for petroleum products.
									</p>
									<div className="btn-wrap">
										<Link
											className="read-more-text"
											to="/service-details/pandurang-petroleum-services-hp-dealer"
										>
											READ MORE{" "}
											<span>
												<FaArrowRight />
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="feature-wrap bg-pink">
									<div className="icon">
										<img src="assets/img/icon/feature-1.png" alt="PAUS" />
									</div>
									<h5>Pandurang Steel Building Material</h5>
									<p>
										We're authorized dealers for Rajuri steel, Ambuja & Shree cement, Rainbow tanks,
										and offer a wide range of building materials like cement, steel, windows, doors.
									</p>
									<div className="btn-wrap">
										<Link
											className="read-more-text"
											to="/service-details/pandurang-steel-building-material"
										>
											READ MORE{" "}
											<span>
												<FaArrowRight />
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="feature-wrap bg-pink">
									<div className="icon">
										<img src="assets/img/icon/feature-1.png" alt="PAUS" />
									</div>
									<h5>Pandurang Industries Stone Crusher</h5>
									<p>
										Pandurang Industries: Your source for crushed stone (20mm, 10mm, 6mm dust),
										crush sand, and washed sands (M & Plaster).
									</p>
									<div className="btn-wrap">
										<Link
											className="read-more-text"
											to="/service-details/pandurang-industries-stone-crusher"
										>
											READ MORE{" "}
											<span>
												<FaArrowRight />
											</span>
										</Link>
									</div>
								</div>
							</div>
						</Slider>
					</div>
				</div>
			</div>
			{/* feature area end */}
		</>
	);
};

export default FeatureOne;
