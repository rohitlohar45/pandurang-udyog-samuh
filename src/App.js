import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeOne from "./pages/HomeOne";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import About from "./pages/About";
import ServiceDetails from "./pages/ServiceDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
				{/* Use RequireAuthentication HOC for dashboard routes */}
				<Route path="/dashboard/*" element={user ? <Dashboard /> : <Login />} />
				<Route exact path="/" element={<HomeOne />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/service-details/:id" element={<ServiceDetails />} />
				<Route exact path="/blog" element={<Blog />} />
				<Route exact path="/blog-details" element={<BlogDetails />} />
				<Route exact path="/pricing" element={<Pricing />} />
				<Route exact path="/faq" element={<Faq />} />
				<Route exact path="/contact" element={<Contact />} />
			</Routes>
			<ScrollToTop smooth color="#bd0e0e" />
		</BrowserRouter>
	);
}

export default App;
