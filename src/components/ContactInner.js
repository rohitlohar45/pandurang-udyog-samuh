import React, { useRef, useState } from "react";
import {
	FaCalculator,
	FaFileAlt,
	FaMapMarkerAlt,
	FaPencilAlt,
	FaPhoneAlt,
	FaRegEnvelope,
	FaUserAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useToast } from "@chakra-ui/react";
import servicePages from "../utils/services";
const ContactInner = () => {
	const form = useRef();
	const db = getFirestore();
	const toast = useToast({
		position: "top",
	});
	const [selectedOption, setSelectedOption] = useState("");
	const [hidden, setHidden] = useState(true);

	const handleSelectChange = (event) => {
		setSelectedOption(event.target.value);
	};

	const sendQuery = async (e) => {
		e.preventDefault();

		if (hidden) {
			const formData = new FormData(form.current);

			const queryContent = {
				user_name: formData.get("user_name"),
				user_email: formData.get("user_email"),
				phone_number: formData.get("phone_number"),
				subject: formData.get("subject"),
				message: formData.get("message"),
			};

			const eventsCollectionRef = collection(db, "queries");
			try {
				const docRef = await addDoc(eventsCollectionRef, queryContent);
				// console.log("Query added with ID: ", docRef.id);
				toast({
					title: "Query sent successfully!",
					status: "success",
					duration: 2000,
					isClosable: true,
					containerStyle: {
						marginTop: "40px",
						width: "400px",
					},
				});
				form.current.reset();
			} catch (error) {
				console.error("Error adding query: ", error);
				toast({
					title: "Not sent",
					status: "error",
					duration: 2000,
					isClosable: true,
					containerStyle: {
						marginTop: "40px",
						width: "400px",
					},
				});
			}
		}
	};

	const sendEmail = (e) => {
		e.preventDefault();
		// Please See Documentation for more information
		emailjs
			.sendForm(
				"service_yipk4xg", //YOUR_SERVICE_ID
				"template_71bgc2q", //YOUR_TEMPLATE_ID
				form.current,
				"cwf8kROl5o3__96Ti" //YOUR_PUBLIC_KEY
			)
			.then(
				(result) => {
					if (result.text === "OK") {
						toast.success("Massage Sent Successfully!");
						form.current[0].value = "";
						form.current[1].value = "";
						form.current[2].value = "";
						form.current[3].value = "";
					}
				},
				(error) => {
					if (error.text !== "OK") {
						toast.success("Massage Not Sent!");
					}
				}
			);
	};
	return (
		<>
			{/* contact area start */}
			<div className="container">
				<div className="contact-area mg-top-120 mb-120">
					<div className="row g-0 justify-content-center">
						<div className="col-lg-7">
							<form className="contact-form text-center" ref={form} onSubmit={sendQuery}>
								<h3>GET A QUOTE</h3>
								<div className="row">
									<div className="col-md-6">
										<div className="single-input-inner">
											<label>
												<FaUserAlt />
											</label>
											<input type="text" placeholder="Your name" name="user_name" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="single-input-inner">
											<label>
												<FaRegEnvelope />
											</label>
											<input type="text" placeholder="Your email" name="user_email" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="single-input-inner">
											<label>
												<FaCalculator />
											</label>
											<input type="text" placeholder="Phone number" name="phone_number" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="single-select-inner">
											<label>
												<FaFileAlt />
											</label>
											<select
												className="single-select"
												name="subject"
												onChange={handleSelectChange}
												value={selectedOption}
											>
												{!selectedOption && <option>Subject</option>}
												{servicePages.map((service, index) => (
													<option key={index} value={service.name}>
														{service.name}
													</option>
												))}
											</select>
										</div>
									</div>
									<div className="col-12">
										<div className="single-input-inner">
											<label>
												<FaPencilAlt />
											</label>
											<textarea
												placeholder="Write message"
												defaultValue={""}
												id="message"
												name="message"
											/>
										</div>
										<input type="hidden" name="service" onChange={() => setHidden(false)} />
									</div>
									<div className="col-12">
										<button className="btn btn-base" type="submit">
											SEND MESSAGE
										</button>
									</div>
								</div>
							</form>
						</div>
						<div className="col-lg-5">
							<div className="contact-information-wrap">
								<h3>CONTACT INFORMATION</h3>
								<div className="single-contact-info-wrap">
									<h6>Contact Number:</h6>
									<div className="media">
										<div className="icon">
											<FaPhoneAlt />
										</div>
										<div className="media-body">
											<p>9096519555</p>
											<p>9766568555</p>
											<p>9075775555</p>
										</div>
									</div>
								</div>
								<div className="single-contact-info-wrap">
									<h6>Mail Address:</h6>
									<div className="media">
										<div className="icon" style={{ background: "#080C24" }}>
											<FaRegEnvelope />
										</div>
										<div className="media-body">
											<p>info@pandurang-udyog-samuh.com</p>
											<p>info.example@gmail.com</p>
										</div>
									</div>
								</div>
								<div className="single-contact-info-wrap mb-0">
									<h6>Office Location:</h6>
									<div className="media">
										<div className="icon" style={{ background: "#565969" }}>
											<FaMapMarkerAlt />
										</div>
										<div className="media-body">
											<p>A/p. KandarTal. KarmalaDist. Solapur,</p>
											<p> Maharashtra,India</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* contact area end */}

			<div className="contact-g-map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29208.601361499546!2d90.3598076!3d23.7803374!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1589109092857!5m2!1sen!2sbd" />
			</div>
		</>
	);
};

export default ContactInner;
