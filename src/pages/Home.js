import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import LogisticsOne from "../components/LogisticsOne";
import Amenities from "../components/Amenities";
import Bank from "../components/Bank";
const BannerOne = React.lazy(() => import("../components/BannerOne"));
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const FeatureOne = React.lazy(() => import("../components/FeatureOne"));
const FooterBottomOne = React.lazy(() => import("../components/FooterBottomOne"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const Navbar = React.lazy(() => import("../components/Navbar"));

const WhyChooseUsOne = React.lazy(() => import("../components/WhyChooseUsOne"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const HomeOne = () => {
	return (
		<>
			<Fragment>
				<Suspense fallback={<Preloader />}>
					<SearchPopup />
					<Navbar />
					<BannerOne />
					<FeatureOne />
					<AboutOne />
					<WhyChooseUsOne />
					<LogisticsOne />
					<Amenities />
					<Bank />
					<FooterOne />
					<FooterBottomOne />
				</Suspense>
			</Fragment>
		</>
	);
};

export default HomeOne;
