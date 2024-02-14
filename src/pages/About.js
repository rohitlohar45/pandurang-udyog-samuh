import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const CounterOne = React.lazy(() => import("../components/CounterOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const PartnerOne = React.lazy(() => import("../components/PartnerOne"));
const SkillOne = React.lazy(() => import("../components/SkillOne"));
const TeamOne = React.lazy(() => import("../components/TeamOne"));
const TestimonialTwo = React.lazy(() => import("../components/TestimonialTwo"));
const VideoAreaOne = React.lazy(() => import("../components/VideoAreaOne"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const About = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          <SearchPopup />

          {/* Navbar One */}
          <NavbarOne />

          {/* Breadcrumb */}
          <Breadcrumb title={"ABOUT US"} />

          {/* About One */}
          <div className='pd-top-120 pd-bottom-120'>
            <AboutOne />
          </div>

          {/* Counter One */}

          <div className='fact-area' style={{ background: "#f9f9f9" }}>
            <CounterOne />
          </div>

          {/* Skill One */}
          <SkillOne />

          {/* Video Area One */}
          <VideoAreaOne />

          {/* Team One */}
          <div className='pd-bottom-80'>
            <TeamOne />
          </div>

          {/* Testimonial Two */}
          <TestimonialTwo />

          {/* Partner One */}
          <PartnerOne />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default About;
