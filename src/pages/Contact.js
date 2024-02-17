import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const ContactInner = React.lazy(() => import("../components/ContactInner"));
const FooterBottomOne = React.lazy(() => import("../components/FooterBottomOne"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const Navbar = React.lazy(() => import("../components/Navbar"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const Contact = () => {
	return (
		<>
			<Fragment>
				<Suspense fallback={<Preloader />}>
					{/* Search Popup */}
					<SearchPopup />

					{/* Navbar One */}
					<Navbar />

					{/* Breadcrumb */}
					<Breadcrumb title={"CONTACT US"} />

					{/* Breadcrumb */}
					<ContactInner />

					{/* Footer One */}
					<FooterOne />

					{/* Footer Bottom One */}
					<FooterBottomOne />
				</Suspense>
			</Fragment>
		</>
	);
};

export default Contact;
