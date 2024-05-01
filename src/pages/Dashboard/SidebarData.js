import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import BusinessIcon from "@mui/icons-material/Business";

export const SidebarData = [
	{ title: "Services", icon: <BusinessIcon />, link: "/dashboard" },
	{ title: "Events", icon: <DashboardIcon />, link: "/dashboard/events" },
	{ title: "Awards", icon: <ManageAccountsIcon />, link: "/dashboard/awards" },
	{ title: "Queries", icon: <AccountCircleIcon />, link: "/dashboard/queries" },
	{ title: "Testimonials", icon: <AccountCircleIcon />, link: "/dashboard/testimonials" },
];
