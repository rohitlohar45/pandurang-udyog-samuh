import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const AboutTwo = React.lazy(() => import("../components/AboutTwo"));
const BannerTwo = React.lazy(() => import("../components/BannerTwo"));
const BlogTwo = React.lazy(() => import("../components/BlogTwo"));
const CounterTwo = React.lazy(() => import("../components/CounterTwo"));
const FaqOne = React.lazy(() => import("../components/FaqOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterTwo = React.lazy(() => import("../components/FooterTwo"));
const NavbarTwo = React.lazy(() => import("../components/NavbarTwo"));
const PartnerTwo = React.lazy(() => import("../components/PartnerTwo"));
const PricingOne = React.lazy(() => import("../components/PricingOne"));
const RequestQuoteOne = React.lazy(() =>
  import("../components/RequestQuoteOne")
);
const ServiceTwo = React.lazy(() => import("../components/ServiceTwo"));
const TestimonialTwo = React.lazy(() => import("../components/TestimonialTwo"));
const VideoAreaOne = React.lazy(() => import("../components/VideoAreaOne"));
const WhyChooseUsTwo = React.lazy(() => import("../components/WhyChooseUsTwo"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const HomeTwo = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          <SearchPopup />

          {/* Navbar Two */}
          <NavbarTwo />

          {/* Banner Two */}
          <BannerTwo />

          {/* Partner Two */}
          <PartnerTwo />

          {/* About Two */}
          <AboutTwo />

          {/* Counter Two */}
          <CounterTwo />

          {/* Service Two */}
          <ServiceTwo />

          {/* Why Choose Us Two */}
          <WhyChooseUsTwo />

          {/* Request Quote One */}
          <RequestQuoteOne />

          {/* Pricing One */}
          <PricingOne />

          {/* Testimonial Two */}
          <TestimonialTwo />

          {/* Video Area One */}
          <VideoAreaOne />

          {/* Faq One */}
          <div className='faq-area pd-top-120'>
            <FaqOne />
          </div>

          {/* Blog Two */}
          <BlogTwo />

          {/* Footer Two */}
          <FooterTwo />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeTwo;
