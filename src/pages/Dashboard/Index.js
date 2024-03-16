import React from "react";
import { useParams } from "react-router-dom";
import Queries from "./Queries";
import Events from "./Dashboard";
import Awards from "./Awards";

const Dashboard = () => {
	const urlParams = useParams();

	if (urlParams["*"] == "queries") {
		return <Queries />;
	} else if (urlParams["*"] == "awards") {
		return <Awards />;
	} else {
		return <Events />;
	}
};

export default Dashboard;
