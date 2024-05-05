import React, { useContext, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaTools, FaIndustry } from "react-icons/fa"; // Sample icons
import { Link } from "react-router-dom";
import Slider from "react-slick";
import clsx from "clsx";
import { useAppContext } from "../context/AppContext";

const FeatureOne = () => {
	const { servicePages } = useAppContext();

	function SampleNextArrow(props) {
		const { className, onClick } = props;
		return <FaArrowLeft className={className} onClick={onClick} />;
	}

	function SamplePrevArrow(props) {
		const { className, onClick } = props;
		return <FaArrowRight className={className} onClick={onClick} />;
	}

	const getLink = (slug) => {
		return `/service-details/${slug}`;
	};

	// Slider Settings
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
	const getRandomBackground = (index) => {
		const colors = ["bg-pink", "bg-ash", "bg-sky"];
		return colors[index % colors.length];
	};

	const truncateText = (text, wordLimit) => {
		const words = text.split(" ");
		if (words.length <= wordLimit) {
			return text;
		}
		return words.slice(0, wordLimit).join(" ") + "...";
	};

	const getRandomIcon = () => {
		const icons = [
			<img src="assets/img/icon/feature-1.png" alt="PAUS" />,
			<img src="assets/img/icon/feature-2.png" alt="PAUS" />,
			<img src="assets/img/icon/feature-3.png" alt="PAUS" />,
		];
		return icons[Math.floor(Math.random() * icons.length)];
	};

	return (
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
								solutions, fruit supply to major clients, agricultural technologies, fuel services,
								and construction materials. Your satisfaction is our priority
							</p>
						</div>
					</div>
				</div>
				<div className="feature-slider owl-carousel">
					<Slider {...settings}>
						{servicePages?.map((service, index) => (
							<div key={service.id} className="item">
								<div className={clsx("feature-wrap", getRandomBackground(index))}>
									<div className="icon">{getRandomIcon()}</div>
									<h5>{service.name}</h5>
									<p>{truncateText(service.description, 20)}</p>
									<div className="btn-wrap">
										<Link className="read-more-text" to={getLink(service.slug)}>
											READ MORE{" "}
											<span>
												<FaArrowRight />
											</span>
										</Link>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default FeatureOne;
