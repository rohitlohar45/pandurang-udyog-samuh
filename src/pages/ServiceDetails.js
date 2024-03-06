import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import { Link, useParams } from "react-router-dom";
import servicePages from "../utils/services";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() => import("../components/FooterBottomOne"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const Navbar = React.lazy(() => import("../components/Navbar"));
const ServiceDetailsInner = React.lazy(() => import("../components/ServiceDetailsInner"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const ServiceDetails = () => {
	// collect slug from URL
	const [isImagesLoaded, setIsImagesLoaded] = useState(false);
	const [isLogoLoaded, setIsLogoLoaded] = useState(false);
	const { id } = useParams();
	const [image, setImage] = useState(
		"https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/awards.png?alt=media&token=0b4b2051-1624-4542-a44c-1c7dc50eb058"
	);

	const [logo, setLogo] = useState(
		"https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/logo-2.png?alt=media&token=8e04a245-c22d-4823-b621-77f927a0771a"
	);

	// get the name of the service from the slug
	const service = servicePages.find((service) => service.slug === id);

	// Handler for image and logo loading
	const handleLogoLoaded = () => {
		setIsLogoLoaded(true);
	};
	const handleImagesLoad = () => {
		setIsImagesLoaded(true);
	};

	return (
		<>
			<Fragment>
				<Suspense fallback={<Preloader />}>
					{!isImagesLoaded && <Preloader />}
					<Navbar logo={logo} onLoad={handleImagesLoad} />
					<Breadcrumb title={service?.name} onLoad={handleImagesLoad} />
					<ServiceDetailsInner service={service.slug} />
					<FooterOne logo={logo} onLoad={handleImagesLoad} />
					<FooterBottomOne />
				</Suspense>
			</Fragment>
		</>
	);
};

export default ServiceDetails;
