import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import HomeEvents from "../components/HomeEvents";
const LogisticsOne = React.lazy(() => import("../components/LogisticsOne"));
const Amenities = React.lazy(() => import("../components/Amenities"));
const Bank = React.lazy(() => import("../components/Bank"));
const TestimonialsCarousel = React.lazy(() => import("./Testimonials"));
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
					<TestimonialsCarousel />
					<Amenities />
					<Bank />
					<HomeEvents />
					<FooterOne />
					<FooterBottomOne />
				</Suspense>
			</Fragment>
		</>
	);
};

export default HomeOne;
