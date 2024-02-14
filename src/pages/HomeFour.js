import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";

const NavbarFour = React.lazy(() => import("../components/NavbarFour"));
const BannerFour = React.lazy(() => import("../components/BannerFour"));
const SolutionTwo = React.lazy(() => import("../components/SolutionTwo"));
const TransportServiceArea = React.lazy(() =>
  import("../components/TransportServiceArea")
);
const ShipmentTwo = React.lazy(() => import("../components/ShipmentTwo"));
const LogisticsTwo = React.lazy(() => import("../components/LogisticsTwo"));
const FeatureThree = React.lazy(() => import("../components/FeatureThree"));
const TestimonialFour = React.lazy(() =>
  import("../components/TestimonialFour")
);
const CompanyOne = React.lazy(() => import("../components/CompanyOne"));
const FooterThree = React.lazy(() => import("../components/FooterThree"));

const HomeFour = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Navbar Four */}
          <NavbarFour />

          {/* Banner Four */}
          <BannerFour />

          {/* Solution Two */}
          <SolutionTwo />

          {/* Transport Service Area */}
          <TransportServiceArea />

          {/* Shipment Two */}
          <ShipmentTwo />

          {/* Logistics Two */}
          <LogisticsTwo />

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

export default HomeFour;
