import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import { Link, useParams } from "react-router-dom";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() => import("../components/FooterBottomOne"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const Navbar = React.lazy(() => import("../components/Navbar"));
const AwardDetailsInner = React.lazy(() => import("../components/AwardDetailsInner"));

const convertToTitleCase = (sentence) => {
	const words = sentence.split("-");
	const titleCaseWords = words
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
	return titleCaseWords;
};

const AwardDetails = () => {
	const [isImagesLoaded, setIsImagesLoaded] = useState(false);
	const [isLogoLoaded, setIsLogoLoaded] = useState(false);
	const [service, setService] = useState(null);
	const { id } = useParams();
	const [logo, setLogo] = useState(
		"https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/logo-2.png?alt=media&token=8e04a245-c22d-4823-b621-77f927a0771a"
	);

	useEffect(() => {
		const fetchData = async () => {
			let url = window.location.href.split("/");
			let path = url[url.length - 2];
			let id = url[url.length - 1];
			let name = convertToTitleCase(id);
			let data = {
				name: name,
				slug: id,
			};
			setService(data);
		};

		fetchData();
	}, [id]);

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
					{service ? (
						<>
							<Breadcrumb title={service?.name} onLoad={handleImagesLoad} />
							<AwardDetailsInner service={service.slug} />
						</>
					) : null}

					<FooterOne logo={logo} onLoad={handleImagesLoad} />
					<FooterBottomOne />
				</Suspense>
			</Fragment>
		</>
	);
};

export default AwardDetails;
