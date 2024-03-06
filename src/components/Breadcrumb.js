import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let image =
	"https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/Awards.png?alt=media&token=60012774-7fc7-4999-a914-652022175918";

const Breadcrumb = ({ title, onLoad = null }) => {
	return (
		<>
			<div className="breadcrumb-area bg-overlay-1" style={{ backgroundImage: `url(${image})` }}>
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
