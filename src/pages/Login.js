// Login.js

import React, { useState } from "react";
import { FaRegEnvelope, FaUserAlt } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useToast } from "@chakra-ui/react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const toast = useToast({
		position: "top",
	});

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			// console.log(email, password);
			const auth = getAuth();
			const res = await signInWithEmailAndPassword(auth, email, password);
			if (res) {
				toast({
					title: "Login Success.",
					description: "Login Success. Redirecting to dashboard.",
					status: "success",
					duration: 2000,
					isClosable: true,
					containerStyle: {
						marginTop: "40px",
						width: "400px",
					},
				});
				window.location.href = "/dashboard";
			}
		} catch (error) {
			let errorMessage;

			switch (error.code) {
				case "auth/invalid-credential":
					errorMessage = "Invalid credential. Please check your credentials and try again.";
					break;
				case "auth/user-not-found":
					errorMessage = "User not found. Please check your email and try again.";
					break;
				case "auth/wrong-password":
					errorMessage = "Incorrect password. Please try again or reset your password.";
					break;
				case "auth/too-many-requests":
					errorMessage = "Too many requests. Please wait a while before trying again.";
					break;
				default:
					errorMessage = "An unknown error occurred. Please try again.";
					break;
			}

			// Display a toast notification with the specific error message
			toast({
				title: "Error signing in",
				description: errorMessage,
				status: "error",
				duration: 2000,
				isClosable: true,
				containerStyle: {
					marginTop: "40px",
					width: "400px",
				},
			});

			// Handle error (display error message, reset form, etc.)
		}
	};

	return (
		<div className="container">
			<div className="contact-area mg-top-120 mb-120">
				<div className="row g-0 justify-content-center">
					<div className="col-lg-7">
						<form className="contact-form text-center" onSubmit={handleLogin}>
							<h3>LOGIN</h3>
							<div className="row">
								<div className="col-md-12">
									<div className="single-input-inner">
										<label>
											<FaUserAlt />
										</label>
										<input
											type="email"
											placeholder="Email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											required
										/>
									</div>
								</div>
								<div className="col-md-12">
									<div className="single-input-inner">
										<label>
											<FaRegEnvelope />
										</label>
										<input
											type="password"
											placeholder="Password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											required
										/>
									</div>
								</div>

								<div className="col-12">
									<button className="btn btn-base" type="submit">
										LOGIN
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
