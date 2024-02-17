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
	const { id } = useParams();
	const [image, setImage] = useState("");

	// get the name of the service from the slug
	const service = servicePages.find((service) => service.slug === id);

	useEffect(() => {
		if (service) {
			setImage("assets/img/banner/awards1.png");
		}
	}, [service]);

	return (
		<>
			<Fragment>
				<Suspense fallback={<Preloader />}>
					{/* Search Popup */}
					<SearchPopup />

					{/* Navbar One */}
					<Navbar />

					{/* Breadcrumb */}
					<Breadcrumb title={service?.name} image={image} />

					{/* Service Details Inner */}
					<ServiceDetailsInner service={service.slug} />

					{/* Footer One */}
					<FooterOne />

					{/* Footer Bottom One */}
					<FooterBottomOne />
				</Suspense>
			</Fragment>
		</>
	);
};

export default ServiceDetails;
