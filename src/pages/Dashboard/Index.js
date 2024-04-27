import React from "react";
import { useParams } from "react-router-dom";
import Queries from "./Queries";
import Events from "./Dashboard";
import Awards from "./Awards";
import Services from "./Services";

const Dashboard = () => {
	const urlParams = useParams();

	if (urlParams["*"] == "queries") {
		return <Queries />;
	} else if (urlParams["*"] == "awards") {
		return <Awards />;
	} else if (urlParams["*"] == "events") {
		return <Events />;
	} else {
		return <Services />;
	}
};

export default Dashboard;
