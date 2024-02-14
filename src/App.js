import { BrowserRouter, Routes, Route } from "react-router-dom";
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
function App() {
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
        <Route exact path='/' element={<HomeOne />} />
        <Route exact path='/home-2' element={<HomeTwo />} />
        <Route exact path='/home-3' element={<HomeThree />} />
        <Route exact path='/home-4' element={<HomeFour />} />
        <Route exact path='/home-5' element={<HomeFive />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/service-details' element={<ServiceDetails />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/blog-details' element={<BlogDetails />} />
        <Route exact path='/pricing' element={<Pricing />} />
        <Route exact path='/faq' element={<Faq />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <ScrollToTop smooth color='#FA4318' />
    </BrowserRouter>
  );
}

export default App;
