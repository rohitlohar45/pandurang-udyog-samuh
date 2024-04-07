import React, { useEffect, useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import { FaArrowRight, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const AwardDetailsInner = ({ award, handleRedirect }) => {
	const [images, setImages] = useState([]);
	const [information, setInformation] = useState({});
	const [topAwards, setTopAwards] = useState([]);

	useEffect(() => {
		if (award) {
			const { information } = award;
			setInformation(information);
		}
		localStorage.getItem("top5Awards") &&
			setTopAwards(JSON.parse(localStorage.getItem("top5Awards")));
	}, [award]);

	return (
		<>
			<div className="service-area pd-top-120 pd-bottom-120">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="service-details-wrap">
								<div className="thumb">
									<Carousel className="popup__top-car">
										{information?.images?.map((image, index) => (
											<Carousel.Item key={index}>
												<div className="popup__img-container">
													<img className="popup__img" src={image} alt={`Slide ${index + 1}`} />
												</div>
											</Carousel.Item>
										))}
									</Carousel>
								</div>
								<h2>{award?.title}</h2>

								<p className="last-para">{information?.description}</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="sidebar-area">
								<div className="widget widget_catagory">
									<h4 className="widget-title">
										AWARDS
										<span className="dot" />
									</h4>
									<ul className="catagory-items">
										{topAwards.map((award, index) => (
											<li key={index} onClick={() => handleRedirect(award)}>
												<Link>
													{award.title}
													<span>
														<FaArrowRight />
													</span>
												</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AwardDetailsInner;
