import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeOne from "./pages/HomeOne";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import HomeTwo from "./pages/HomeTwo";
import About from "./pages/About";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import HomeThree from "./pages/HomeThree";
import HomeFour from "./pages/HomeFour";
import HomeFive from "./pages/HomeFive";
import Login from "./pages/Login";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store/store";
import Dashboard from "./pages/Dashboard/Dashboard";
import RequireAuthentication from "./utils/requireAuthentication";
function App() {
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated); 
	useEffect(() => {
		AOS.init({
			offset: 0,
			easing: "ease",
			once: true,
		});
		AOS.refresh();
	}, []);
	useEffect(()=>{
		console.log(isAuthenticated)
	},[])
	return (
		<Provider store={store}>
			<BrowserRouter>
				<RouteScrollToTop />
				<Routes>
					<Route path="/login" element={<Login />} />
					{/* Use RequireAuthentication HOC for dashboard routes */}
					<Route path="/dashboard/*" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
					<Route exact path="/" element={<HomeOne />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/service-details/:id" element={<ServiceDetails />} />
					<Route exact path="/blog" element={<Blog />} />
					<Route exact path="/blog-details" element={<BlogDetails />} />
					<Route exact path="/pricing" element={<Pricing />} />
					<Route exact path="/faq" element={<Faq />} />
					<Route exact path="/contact" element={<Contact />} />
				</Routes>
				<ScrollToTop smooth color="#FA4318" />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
