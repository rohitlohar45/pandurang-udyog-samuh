import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import LogisticsOne from "../components/LogisticsOne";
const BannerOne = React.lazy(() => import("../components/BannerOne"));
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const ContactOne = React.lazy(() => import("../components/ContactOne"));
const CounterOne = React.lazy(() => import("../components/CounterOne"));
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
					{/* Search Popup */}
					<SearchPopup />

					{/* Navbar One */}
					<Navbar />

					{/* Banner One */}
					<BannerOne />

					{/* Feature One */}
					<FeatureOne />

					{/* About One */}
					<AboutOne />

					{/* Service One */}
					{/* <ServiceOne /> */}

					{/* Why Choose Us One */}
					<WhyChooseUsOne />

					{/* Counter One */}

					<CounterOne />

					<LogisticsOne />

					{/* Footer One */}
					<FooterOne />

					{/* Footer Bottom One */}
					<FooterBottomOne />
				</Suspense>
			</Fragment>
		</>
	);
};

export default HomeOne;
