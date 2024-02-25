import React, { useRef } from "react";
import { FaCalculator, FaFileAlt, FaPencilAlt, FaRegEnvelope, FaUserAlt } from "react-icons/fa";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useToast } from "@chakra-ui/react";

const ContactInner = () => {
	const form = useRef();
	const db = getFirestore();
	const toast = useToast({
		position: "top",
	});

	const sendQuery = async (e) => {
		e.preventDefault();

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
			console.log("Query added with ID: ", docRef.id);
			toast({
				title: "Query sent successfully!",
				status: "success",
				duration: 9000,
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
				duration: 9000,
				isClosable: true,
				containerStyle: {
					marginTop: "40px",
					width: "400px",
				},
			});
		}
	};

	return (
		<>
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
											<select className="single-select" name="subject">
												<option>Subject</option>
												<option value={1}>Some option</option>
												<option value={2}>Another option</option>
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
									</div>
									<div className="col-12">
										<button className="btn btn-base" type="submit">
											SEND MESSAGE
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactInner;
