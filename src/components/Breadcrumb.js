import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bannerImage } from "../utils/services";

let image =
	"https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/awards.png?alt=media&token=0b4b2051-1624-4542-a44c-1c7dc50eb058";

const Breadcrumb = ({ title, onLoad = null }) => {
	return (
		<>
			<div
				style={{
					backgroundImage: image,
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
