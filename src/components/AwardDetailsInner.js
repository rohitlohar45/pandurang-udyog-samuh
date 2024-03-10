import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import { FaArrowRight, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import awardContent from "../utils/awardDetails";
import awardsPages from "../utils/awards";

const AwardDetailsInner = ({ service, serviceDetails = null }) => {
	console.log(serviceDetails);
	const details = awardContent[service];
	const information = details?.information;
	const images = information?.images;
	// console.log(images);
	//   const images = [
	//     "/assets/img/service/pan-exports-cold-storage/1.jpg",
	//     "/assets/img/service/pandurang-agro-industries-cold-storage/1.jpg",
	//     "/assets/img/service/pandurang-krushi-udyog-banana-tissue-drip/1.gif",
	//   ];
	return (
		<>
			<div className="service-area pd-top-120 pd-bottom-120">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="service-details-wrap">
								<div className="thumb">
									<Carousel className="popup__top-car">
										{images?.map((image, index) => (
											<Carousel.Item key={index}>
												<img className="popup__img" src={image} alt={`Slide ${index + 1}`} />
											</Carousel.Item>
										))}
									</Carousel>
								</div>
								<h2>{information?.title}</h2>

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
										{awardsPages.map((service, index) => (
											<li key={index}>
												<Link to={`/award-details/${service.slug}`}>
													{service.name}
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
