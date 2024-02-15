import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/initialise";
import { toast } from "react-toastify";

const Dashboard = () => {
	const logout = () => {
		signOut(auth)
			.then(() => {
				toast.success("Logout successful!");
				window.location.href = "/login";
			})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<div>
			<h1>Dashboard</h1>
			<div className="dashboard-content">
				{/* Add various components, widgets, or modules here */}
				<div className="widget">
					<h2>Welcome User!</h2>
					<p>Here's a quick overview of your account.</p>
				</div>
				<div className="widget">
					<h2>Recent Activity</h2>
					{/* Display recent activity or notifications */}
					<ul>
						<li>Activity 1</li>
						<li>Activity 2</li>
						<li>Activity 3</li>
					</ul>
				</div>
				<div className="widget">
					<h2>Quick Actions</h2>
					{/* Add buttons or links for quick actions */}
					<button>View Profile</button>
					<button>Settings</button>
					<button onClick={logout}>Logout</button>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
