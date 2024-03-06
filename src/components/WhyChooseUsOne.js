import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
const WhyChooseUsOne = () => {
	const [isOpen, setOpen] = useState(false);
	const [img, setImg] = useState("");

	useEffect(() => {
		const getData = async () => {
			try {
				// Assuming the image is available in the public folder
				const imageUrl = "assets/img/wcu/1.JPG";

				await fetch(imageUrl)
					.then((res) => res.blob())
					.then((blob) => {
						const file = new File([blob], "image.jpg", { type: "image/jpeg" });
						const reader = new FileReader();
						reader.readAsDataURL(file);
						reader.onloadend = () => {
							const base64data = reader.result;
							setImg(base64data);
							console.log(base64data);
						};
					});

				// Create a URL object for the image
				const imageUrlObject = new URL(imageUrl, window.location.origin);

				// Fetch the image using the URL object
				const response = await fetch(imageUrlObject.href);

				// Get the image blob
				const imageBlob = await response.blob();

				// Determine the file extension
				const extension = imageUrl.split(".").pop();
				let contentType = "";

				// Set content type based on file extension
				switch (extension.toLowerCase()) {
					case "jpg":
					case "jpeg":
						contentType = "image/jpeg";
						break;
					case "png":
						contentType = "image/png";
						break;
					case "gif":
						contentType = "image/gif";
						break;
					default:
						console.error("Unsupported file extension");
						return;
				}

				// Read the blob as a data URL with the determined content type
				const reader = new FileReader();
				reader.readAsDataURL(imageBlob, contentType); // Set the content type here
				reader.onloadend = () => {
					const base64data = reader.result;
					// setImg(base64data);
					// console.log(base64data);
				};
			} catch (error) {
				console.error("Error loading image:", error);
			}
		};

		// getData();
	}, []);
	return (
		<>
			{/*wcu-area start*/}
			<div
				className="wcu-area bg-overlay"
				style={{ background: "url(assets/img/banner/awards.png)" }}
			>
				<img className="img-1" src="assets/img/wcu/1.png" alt="Pandurang Udyog Samuh" />
				<img className="img-2" src="assets/img/wcu/2.png" alt="Pandurang Udyog Samuh" />
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-7 col-lg-6 order-lg-2">
							<div className="video-thumb-wrap">
								<img src="assets/img/wcu/1.JPG" alt="Pandurang Udyog Samuh" />
								{/* <span
                  className="video-play-btn cursor-pointer"
                  data-effect="mfp-zoom-in"
                  onClick={() => setOpen(true)}
                >
                  <FaPlay />
                </span> */}
							</div>
						</div>
						<div className="col-xl-5 col-lg-6 order-lg-1">
							<div className="section-title style-white mb-0">
								<h4 className="subtitle style-2">WHY CHOOSE US</h4>
								<h2 className="title">WHY CHOOSE FOR US</h2>
								<p className="content">
									Discover a wide array of services at Pandurang Enterprises, from cold storage
									solutions to fuel services and construction materials. Your contentment drives our
									dedication to excellence.
								</p>
							</div>
							<div className="single-wcu-wrap">
								<div className="icon">
									<img src="assets/img/wcu/icon-1.png" alt="Pandurang Udyog Samuh" />
								</div>
								<div className="details">
									<h6>APEDA Approved Facilities</h6>
									<p>
										Our cold storage and pack house are APEDA approved, ensuring compliance with
										industry standards and regulations.
									</p>
								</div>
							</div>
							<div className="single-wcu-wrap">
								<div className="icon">
									<img src="assets/img/wcu/icon-2.png" alt="Pandurang Udyog Samuh" />
								</div>
								<div className="details">
									<h6>Expertise in Banana Packaging</h6>
									<p>
										With over 17 years of experience in banana packaging, we excel in improving the
										quality and quantity of banana packaging.
									</p>
								</div>
							</div>
							<div className="single-wcu-wrap">
								<div className="icon">
									<img src="assets/img/wcu/icon-3.png" alt="Pandurang Udyog Samuh" />
								</div>
								<div className="details">
									<h6>High Volume and Quality Assurance</h6>
									<p>
										Successfully packaged and supplied 704 containers of fruits, ensuring consistent
										quality and freshness.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*wcu-area end*/}
			{/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="XM6kTQPzzpQ"
        onClose={() => setOpen(false)}
      /> */}
		</>
	);
};

export default WhyChooseUsOne;
