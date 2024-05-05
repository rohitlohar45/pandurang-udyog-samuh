import React from "react";
import { useParams } from "react-router-dom";
import Queries from "./Queries";
import Events from "./Dashboard";
import Awards from "./Awards";
import Services from "./Services";
import Testimonials from "./Testimonials";
import HomeEvents from "./HomeEvents";

const Dashboard = () => {
	const urlParams = useParams();

	if (urlParams["*"] == "queries") {
		return <Queries />;
	} else if (urlParams["*"] == "awards") {
		return <Awards />;
	} else if (urlParams["*"] == "events") {
		return <Events />;
	} else if (urlParams["*"] == "testimonials") {
		return <Testimonials />;
	} else if (urlParams["*"] == "home-events") {
		return <HomeEvents />;
	} else {
		return <Services />;
	}
};

export default Dashboard;
