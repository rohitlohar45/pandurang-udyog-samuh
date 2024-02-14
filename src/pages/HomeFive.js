import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";

const NavbarFour = React.lazy(() => import("../components/NavbarFour"));
const BannerFive = React.lazy(() => import("../components/BannerFive"));
const SolutionThree = React.lazy(() => import("../components/SolutionThree"));
const TransportServiceAreaTwo = React.lazy(() =>
  import("../components/TransportServiceAreaTwo")
);
const LogisticsTwo = React.lazy(() => import("../components/LogisticsTwo"));
const ShipmentThree = React.lazy(() => import("../components/ShipmentThree"));
const FeatureThree = React.lazy(() => import("../components/FeatureThree"));
const TestimonialFour = React.lazy(() =>
  import("../components/TestimonialFour")
);
const CompanyOne = React.lazy(() => import("../components/CompanyOne"));
const FooterThree = React.lazy(() => import("../components/FooterThree"));

const HomeFive = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Navbar Five */}
          <NavbarFour />

          {/* Banner Five */}
          <BannerFive />

          {/* Solution Three */}
          <SolutionThree />

          {/* TransportServiceAreaTwo */}
          <TransportServiceAreaTwo />

          {/* Logistics Two */}
          <LogisticsTwo />

          {/* ShipmentThree */}
          <ShipmentThree />

          {/* Feature Three */}
          <FeatureThree />

          {/* Testimonial Four */}
          <TestimonialFour />

          {/* Company One */}
          <CompanyOne />

          {/* Footer Three */}
          <FooterThree />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeFive;
