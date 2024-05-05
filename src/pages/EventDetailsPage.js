import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import { Link, useParams } from "react-router-dom";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() => import("../components/FooterBottomOne"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const Navbar = React.lazy(() => import("../components/Navbar"));
const EventDetailsInner = React.lazy(() => import("../components/AwardDetailsInner"));

const EventDetails = () => {
	const [isImagesLoaded, setIsImagesLoaded] = useState(false);
	const [isLogoLoaded, setIsLogoLoaded] = useState(false);
	const [event, setEvent] = useState(null);
	const [logo, setLogo] = useState(
		"https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/logo-2.png?alt=media&token=8e04a245-c22d-4823-b621-77f927a0771a"
	);

	useEffect(() => {
		let eventDetails = localStorage.getItem("selectedEvent");
		setEvent(JSON.parse(eventDetails));
		console.log(event);
	}, []);

	const handleLogoLoaded = () => {
		setIsLogoLoaded(true);
	};
	const handleImagesLoad = () => {
		setIsImagesLoaded(true);
	};

	const handleRedirect = (event) => {
		localStorage.setItem("selectedEvent", JSON.stringify(event));
		setEvent(event);
	};

	return (
		<>
			<Fragment>
				<Suspense fallback={<Preloader />}>
					{!isImagesLoaded && <Preloader />}
					<Navbar logo={logo} onLoad={handleImagesLoad} />
					<Breadcrumb title={event?.title} onLoad={handleImagesLoad} />
					<EventDetailsInner award={event} handleRedirect={handleRedirect} />
					<FooterOne logo={logo} onLoad={handleImagesLoad} />
					<FooterBottomOne />
				</Suspense>
			</Fragment>
		</>
	);
};

export default EventDetails;
