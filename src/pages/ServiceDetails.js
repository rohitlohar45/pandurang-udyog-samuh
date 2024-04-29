import React, { Fragment, Suspense, useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Address } from "../utils/addresses";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const Navbar = React.lazy(() => import("../components/Navbar"));
const ServiceDetailsInner = React.lazy(() =>
  import("../components/ServiceDetailsInner")
);
const ServiceDetails = () => {
  // collect slug from URL

  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const { id } = useParams();

  const { servicePages } = useAppContext();

  const [location, setLocation] = useState(Address["default"]);

  const logo =
    "https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/logo-2.png?alt=media&token=8e04a245-c22d-4823-b621-77f927a0771a";

  // get the name of the service from the slug
  const service = servicePages?.find((service) => service?.slug === id);
  const handleImagesLoad = () => {
    setIsImagesLoaded(true);
  };

  useEffect(() => {
    if (Address[service?.slug]) {
      console.log(Address[service?.slug]);
      setLocation(Address[service?.slug]);
    }
  }, [id]);

  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {!isImagesLoaded && <Preloader />}
          <Navbar logo={logo} onLoad={handleImagesLoad} />
          <Breadcrumb title={service?.name} onLoad={handleImagesLoad} />
          <ServiceDetailsInner service={service?.slug} location={location} />
          <FooterOne logo={logo} onLoad={handleImagesLoad} />
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default ServiceDetails;
