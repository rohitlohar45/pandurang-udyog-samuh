import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export const SidebarData = [
  { title: "Dashboard", icon: <DashboardIcon />, link: "/dashboard" },
  { title: "Profile", icon: <AccountCircleIcon />, link: "/profile" },
  { title: "Settings", icon: <ManageAccountsIcon />, link: "/settings" },
];
