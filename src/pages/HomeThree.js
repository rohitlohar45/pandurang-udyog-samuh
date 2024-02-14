import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const BannerThree = React.lazy(() => import("../components/BannerThree"));
const CompanyOne = React.lazy(() => import("../components/CompanyOne"));
const FeatureTwo = React.lazy(() => import("../components/FeatureTwo"));
const FooterThree = React.lazy(() => import("../components/FooterThree"));
const LogisticsOne = React.lazy(() => import("../components/LogisticsOne"));
const NavbarThree = React.lazy(() => import("../components/NavbarThree"));
const ServiceThree = React.lazy(() => import("../components/ServiceThree"));
const ShipmentOne = React.lazy(() => import("../components/ShipmentOne"));
const SolutionOne = React.lazy(() => import("../components/SolutionOne"));
const SupportBarOne = React.lazy(() => import("../components/SupportBarOne"));
const TestimonialThree = React.lazy(() =>
  import("../components/TestimonialThree")
);

const HomeThree = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* SupportBarOne */}
          <SupportBarOne />

          {/* Navbar Three */}
          <NavbarThree />

          {/* Banner Three */}
          <BannerThree />

          {/* Service Three */}
          <ServiceThree />

          {/* Solution One */}
          <SolutionOne />

          {/* Feature Two */}
          <FeatureTwo />

          {/* Logistics One */}
          <LogisticsOne />

          {/* Shipment One */}
          <ShipmentOne />

          {/* Testimonial Three */}
          <TestimonialThree />

          {/* Company One */}
          <CompanyOne />

          {/* Footer Three */}
          <FooterThree />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeThree;
