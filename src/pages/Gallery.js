import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const GalleryInner = React.lazy(() => import("../components/Gallery"));
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() => import("../components/FooterBottomOne"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const Navbar = React.lazy(() => import("../components/Navbar"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const BlogDetails = () => {
	return (
		<>
			<Fragment>
				<Suspense fallback={<Preloader />}>
					{/* Search Popup */}
					<SearchPopup />

					{/* Navbar One */}
					<Navbar />

					{/* Breadcrumb */}
					<Breadcrumb title={"Gallery"} />

					{/* Blog Details Inner */}
					<GalleryInner />

					{/* Footer One */}
					<FooterOne />

					{/* Footer Bottom One */}
					<FooterBottomOne />
				</Suspense>
			</Fragment>
		</>
	);
};

export default BlogDetails;
