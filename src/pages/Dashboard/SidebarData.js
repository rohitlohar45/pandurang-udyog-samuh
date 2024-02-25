import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export const SidebarData = [
	{ title: "Events", icon: <DashboardIcon />, link: "/dashboard" },
	{ title: "Queries", icon: <AccountCircleIcon />, link: "/dashboard/queries" },
];
