import React from "react";
import { useParams } from "react-router-dom";
import Queries from "./Queries";
import Events from "./Dashboard";

const Dashboard = () => {
	const urlParams = useParams();

	if (urlParams["*"] == "queries") {
		return <Queries />;
	} else {
		return <Events />;
	}
};

export default Dashboard;
