import React, { useEffect, useState } from "react";

import Carousel from "react-bootstrap/Carousel";
// import Carousel from "react-bootstrap/Carousel";

import {
	FaAddressBook,
	FaArrowRight,
	FaPhoneAlt,
	FaPlay,
	FaRegEnvelope,
	FaRegFileAlt,
	FaRegFilePdf,
	FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Events from "./Events";
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { firestore } from "../firebase/initialise";
import { useAppContext } from "../context/AppContext";
import { Address } from "../utils/addresses";

function isVideo(url) {
	if (url.includes("youtube.com")) {
		return true;
	}
	return false;
}

const ServiceDetailsInner = ({ service }) => {
	const [isOpen, setOpen] = useState(false);
	const [information, setInformation] = useState([]);
	const [images, setImages] = useState([]);
	const [supportInfo, setSupportInfo] = useState([]);
	const [eventInfo, setEventInfo] = useState([]);
	const { servicePages } = useAppContext();

	const [click, onClick] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
		// get data from Firestore
		const fetchData = async () => {
			try {
				const docRef = doc(firestore, "services", service);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					const data = docSnap.data();
					console.log(data);

					setInformation(data.information);
					setImages(data.information.images);
					setSupportInfo(data.support);
					setEventInfo(data.eventInfo);
				} else {
					const servicesCollection = collection(firestore, "services");
					const slugQuery = query(servicesCollection, where("information.slug", "==", service));
					const querySnapshot = await getDocs(slugQuery);

					if (!querySnapshot.empty) {
						let data = querySnapshot.docs[0].data();
						setInformation(data.information);
						setImages(data.information.images);
						setSupportInfo(data.support);
						setEventInfo(data.eventInfo);
					} else {
						console.log("No such document!");
					}
				}
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};

		fetchData();
	}, [service]);

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
												{isVideo(image) ? (
													<div className="popup__img-container">
														<iframe
															className="popup__img"
															title={`Slide ${index + 1}`}
															src={image}
															allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
														></iframe>
													</div>
												) : (
													<div className="popup__img-container">
														<img className="popup__img" src={image} alt={`Slide ${index + 1}`} />
													</div>
												)}
											</Carousel.Item>
										))}
									</Carousel>
								</div>
								<h2>{information?.title}</h2>
								<p>{information?.description1}</p>
								<p>{information?.description2}</p>
								<p>{information?.description3}</p>
								<p className="last-para">{information?.description4}</p>
							</div>
							{/* <Events /> */}
						</div>
						<div className="col-lg-4">
							<div className="sidebar-area">
								<div className="widget widget_catagory">
									<h4 className="widget-title">
										BUSINESS LIST
										<span className="dot" />
									</h4>
									<ul className="catagory-items">
										{servicePages?.map((service, index) => (
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
										backgroundColor: "#080c24",
									}}
								>
									<h4 className="widget-title style-white">
										24/7 ONLINE SUPPORT <span className="dot" />
									</h4>
									<p>
										Our team is committed to providing exceptional support round the clock. Whether
										you have questions about our services or need assistance with your stored
										inventory, our customer support team is here to help. Reach out to us via email
										or phone for prompt assistance.
									</p>
									<p className="contact">
										<FaRegEnvelope />
										{supportInfo.email}
									</p>
									<p className="contact mb-0">
										<FaPhoneAlt />
										{supportInfo.phoneNumber}
									</p>
									<p className="contact mb-0">
										<FaAddressBook />
										{supportInfo.address}
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
