import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() => import("../components/FooterBottomOne"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const Navbar = React.lazy(() => import("../components/Navbar"));
const TeamOne = React.lazy(() => import("../components/TeamOne"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const About = () => {
	return (
		<>
			<Fragment>
				<Suspense fallback={<Preloader />}>
					{/* Search Popup */}
					<SearchPopup />

					{/* Navbar One */}
					<Navbar />

					{/* Breadcrumb */}
					<Breadcrumb title={"ABOUT US"} />

					{/* About One */}
					<div className="pd-top-120 pd-bottom-120">
						<AboutOne />
					</div>
					{/* Team One */}
					<div className="pd-bottom-80">
						<TeamOne />
					</div>

					{/* Footer One */}
					<FooterOne />

					{/* Footer Bottom One */}
					<FooterBottomOne />
				</Suspense>
			</Fragment>
		</>
	);
};

export default About;
