import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import About from "./pages/About";
import ServiceDetails from "./pages/ServiceDetails";
import Awards from "./pages/Awards";
import Contact from "./pages/Contact";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import Login from "./pages/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Dashboard from "./pages/Dashboard/Index";
import AwardDetails from "./pages/AwardDetailsPage";
function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				console.log(user);
			} else {
				console.log(user);
			}
		});
	}, []);
	useEffect(() => {
		AOS.init({
			offset: 0,
			easing: "ease",
			once: true,
		});
		AOS.refresh();
	}, []);
	return (
		<BrowserRouter>
			<RouteScrollToTop />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard/*" element={user ? <Dashboard /> : <Login />} />
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/service-details/:id" element={<ServiceDetails />} />
				<Route exact path="/award-details/:id" element={<AwardDetails />} />
				<Route exact path="/awards" element={<Awards />} />
				<Route exact path="/contact" element={<Contact />} />
			</Routes>
			<ScrollToTop smooth color="#bd0e0e" />
		</BrowserRouter>
	);
}

export default App;
