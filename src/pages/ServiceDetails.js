import React, { Fragment, Suspense, useEffect } from "react";
import Preloader from "../elements/Preloader";
import { useParams } from "react-router-dom";
import servicePages from "../utils/services";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() => import("../components/FooterBottomOne"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const ServiceDetailsInner = React.lazy(() => import("../components/ServiceDetailsInner"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const ServiceDetails = () => {
	// collect slug from URL
	const { id } = useParams();

	// get the name of the service from the slug
	const service = servicePages.find((service) => service.slug === id);

	useEffect(() => {
		console.log(service);
	}, []);

	return (
		<>
			<Fragment>
				<Suspense fallback={<Preloader />}>
					{/* Search Popup */}
					<SearchPopup />

					{/* Navbar One */}
					<NavbarOne />

					{/* Breadcrumb */}
					<Breadcrumb title={service.name} />

					{/* Service Details Inner */}
					<ServiceDetailsInner service={service.slug} />

					{/* Footer One */}
					<FooterOne />

					{/* Footer Bottom One */}
					<FooterBottomOne />
				</Suspense>{" "}
			</Fragment>
		</>
	);
};

export default ServiceDetails;
