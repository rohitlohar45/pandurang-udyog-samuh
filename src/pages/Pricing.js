import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const ContactOne = React.lazy(() => import("../components/ContactOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const PartnerOne = React.lazy(() => import("../components/PartnerOne"));
const PricingOne = React.lazy(() => import("../components/PricingOne"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const Pricing = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          <SearchPopup />

          {/* Navbar One */}
          <NavbarOne />

          {/* Breadcrumb */}
          <Breadcrumb title={"PRICING"} />

          {/* Pricing One */}
          <PricingOne />

          {/* Contact One */}
          <div
            className='call-to-contact-area pd-top-140  mt-0'
            style={{ background: "#F9F9F9" }}
          >
            <ContactOne />
          </div>

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

export default Pricing;
