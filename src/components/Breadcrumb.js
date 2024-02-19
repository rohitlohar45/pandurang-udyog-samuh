import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, image = null, onLoad = null }) => {
	const [isImageLoaded, setIsImageLoaded] = useState(false);
	const timestamp = new Date().getTime();

	useEffect(() => {
		// Check if onLoad is provided and call it when the image is loaded
		if (onLoad && image) {
			const img = new Image();
			img.onload = () => {
				setIsImageLoaded(true);
				onLoad(); // Call onLoad callback
			};
			img.src = image;
		}
	}, [image, onLoad]);

	const className = `${isImageLoaded ? "breadcrumb-area bg-overlay-2" : ""}`;

	return (
		<>
			<div
				className={className}
				style={{
					backgroundImage: image
						? `url(${image}?${timestamp})`
						: 'url("assets/img/banner/awards.png")',
					backgroundColor: isImageLoaded ? "transparent" : "rgba(0, 0, 0, 0.8)",
				}}
			>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="breadcrumb-inner">
								<div className="section-title mb-0">
									<h2 className="page-title">{title}</h2>
									<ul className="page-list">
										<li>
											<Link to="/">HOME /</Link>
										</li>
										<li className="ps-0">{title}</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Breadcrumb;
