import React, { useEffect, useState } from "react";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaPhoneAlt,
	FaRegClock,
	FaTwitter,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SetSearchPopUp } from "../redux/stateSlice/clickActionSlice";
import store from "../redux/store/store";
import servicePages from "../utils/services";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			if (window.pageYOffset < 300) {
				setActive(false);
			} else if (window.pageYOffset > 300) {
				setActive(true);
			}
			return () => (window.onscroll = null);
		};
	}, []);

	const searchPopUp = useSelector((state) => state.clickAction.searchPopUp);
	const actionSearch = () => {
		store.dispatch(SetSearchPopUp(!searchPopUp));
	};

	// Control sidebar navigation
	let items = document.querySelectorAll(".menu-item-has-children > a");
	for (let i in items) {
		if (items.hasOwnProperty(i)) {
			items[i].onclick = function () {
				this.parentElement.querySelector(".sub-menu").classList.toggle("active");
				this.classList.toggle("open");
			};
		}
	}
	return (
		<>
			{/* navbar start */}
			<header className="navbar-area">
				<div className="navbar-top">
					<Link className="main-logo" to="/">
						<div className="logo d-none d-xl-block">
							<img
								src="/assets/img/logo.png"
								alt="Pandurang Udyog Samuh"
								style={{
									maxWidth: "100%",
									height: "auto",
									display: "block",
									marginLeft: "auto",
									marginRight: "auto",
									alignContent: "center",
								}}
							/>
						</div>
					</Link>
					<div className="container p-lg-0">
						<div className="row">
							<div className="col-lg-10 col-md-9 text-md-center text-center">
								<ul className="topbar-left">
									<li>
										<svg
											width={12}
											height={17}
											viewBox="0 0 12 17"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M6 0C7.0625 0 8.0625 0.28125 9 0.8125C9.90625 1.375 10.625 2.09375 11.1875 3C11.7188 3.9375 12 4.9375 12 6C12 6.625 11.9062 7.15625 11.7812 7.625C11.625 8.125 11.3438 8.71875 10.9375 9.4375C10.625 9.9375 10.0312 10.9375 9.125 12.375L7.28125 15.2812C7.09375 15.5938 6.8125 15.8125 6.5 15.9375C6.15625 16.0625 5.8125 16.0625 5.5 15.9375C5.15625 15.8125 4.90625 15.5938 4.71875 15.2812L2.875 12.375C1.9375 10.9375 1.34375 9.96875 1.0625 9.46875C0.625 8.71875 0.34375 8.125 0.21875 7.625C0.0625 7.15625 0 6.625 0 6C0 4.9375 0.25 3.9375 0.8125 3C1.34375 2.09375 2.0625 1.375 3 0.8125C3.90625 0.28125 4.90625 0 6 0ZM6 14.5L7.96875 11.375C8.78125 10.0625 9.34375 9.15625 9.625 8.71875C9.96875 8.09375 10.1875 7.625 10.3125 7.25C10.4375 6.90625 10.5 6.5 10.5 6C10.5 5.1875 10.2812 4.4375 9.875 3.75C9.46875 3.0625 8.9375 2.53125 8.25 2.125C7.5625 1.71875 6.8125 1.5 6 1.5C5.1875 1.5 4.4375 1.71875 3.75 2.125C3.0625 2.53125 2.5 3.0625 2.09375 3.75C1.6875 4.4375 1.5 5.1875 1.5 6C1.5 6.5 1.53125 6.90625 1.65625 7.28125C1.78125 7.65625 2.03125 8.125 2.40625 8.75C2.65625 9.1875 3.1875 10.0938 4.03125 11.4062C4.8125 12.6562 5.46875 13.6875 6 14.5ZM3.5 6C3.5 6.6875 3.71875 7.28125 4.21875 7.78125C4.71875 8.28125 5.3125 8.5 6 8.5C6.6875 8.5 7.25 8.28125 7.75 7.78125C8.25 7.28125 8.5 6.6875 8.5 6C8.5 5.3125 8.25 4.75 7.75 4.25C7.25 3.75 6.6875 3.5 6 3.5C5.3125 3.5 4.71875 3.75 4.21875 4.25C3.71875 4.75 3.5 5.3125 3.5 6Z"
												fill="#bd0e0e"
											/>
										</svg>
										A/p. KandarTal. KarmalaDist. Solapur Maharashtra,India
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<nav
					className={
						active
							? "navbar navbar-area-1 navbar-area navbar-expand-lg sticky-active"
							: "navbar navbar-area-1 navbar-area navbar-expand-lg"
					}
				>
					<div className="container nav-container">
						<div className="responsive-mobile-menu">
							<button
								onClick={() => setOpen(!open)}
								className={
									open
										? "menu toggle-btn d-block d-lg-none open"
										: "menu toggle-btn d-block d-lg-none "
								}
								data-target="#pandurang-udyog-samuh_main_menu"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="icon-left" />
								<span className="icon-right" />
							</button>
						</div>
						<div className="logo">
							<Link to="/">
								<img
									src="assets/img/logo-2.png"
									alt="Pandurang Udyog Samuh"
									style={{ width: "75%" }}
								/>
							</Link>
						</div>
						<div className="nav-left-part"></div>

						<div
							className={open ? "collapse navbar-collapse sopen" : "collapse navbar-collapse"}
							id="pandurang-udyog-samuh_main_menu"
						>
							<ul className="navbar-nav menu-open text-md-end">
								<li className="current-menu-item">
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about">About Us</Link>
								</li>
								<li className="menu-item-has-children">
									<Link to="#">Services</Link>
									<ul className="sub-menu">
										{servicePages.map((service, index) => (
											<li key={index}>
												<Link to={`/service-details/${service.slug}`}>{service.name}</Link>
											</li>
										))}
									</ul>
								</li>
								<li>
									<Link to="/awards">Awards</Link>
								</li>
								<li>
									<Link to="/contact">Contact Us</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
