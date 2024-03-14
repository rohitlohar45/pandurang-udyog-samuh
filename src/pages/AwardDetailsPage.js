import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import { Link, useParams } from "react-router-dom";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() => import("../components/FooterBottomOne"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const Navbar = React.lazy(() => import("../components/Navbar"));
const AwardDetailsInner = React.lazy(() => import("../components/AwardDetailsInner"));

const AwardDetails = () => {
	const [isImagesLoaded, setIsImagesLoaded] = useState(false);
	const [isLogoLoaded, setIsLogoLoaded] = useState(false);
	const [award, setAward] = useState(null);
	const { id } = useParams();
	const [logo, setLogo] = useState(
		"https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/logo-2.png?alt=media&token=8e04a245-c22d-4823-b621-77f927a0771a"
	);

	useEffect(() => {
		let awardDetails = localStorage.getItem("selectedAward");
		console.log(awardDetails);
		setAward(JSON.parse(awardDetails));
	}, []);

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
					<Breadcrumb title={award?.title} onLoad={handleImagesLoad} />
					<AwardDetailsInner award={award} />
					<FooterOne logo={logo} onLoad={handleImagesLoad} />
					<FooterBottomOne />
				</Suspense>
			</Fragment>
		</>
	);
};

export default AwardDetails;
