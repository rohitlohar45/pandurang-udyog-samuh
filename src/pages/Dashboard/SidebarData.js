import React from "react";
import WorkIcon from "@mui/icons-material/Work"; // For Services
import EventIcon from "@mui/icons-material/Event"; // For Events
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // For Awards
import QueryStatsIcon from "@mui/icons-material/QueryStats"; // For Queries
import RateReviewIcon from "@mui/icons-material/RateReview"; // For Testimonials
import HomeIcon from "@mui/icons-material/Home"; // For Home Events

export const SidebarData = [
	{ title: "Home Events", icon: <HomeIcon />, link: "/dashboard/home-events" },
	{ title: "Services", icon: <WorkIcon />, link: "/dashboard" },
	{ title: "Events", icon: <EventIcon />, link: "/dashboard/events" },
	{ title: "Awards", icon: <EmojiEventsIcon />, link: "/dashboard/awards" },
	{ title: "Queries", icon: <QueryStatsIcon />, link: "/dashboard/queries" },
	{ title: "Testimonials", icon: <RateReviewIcon />, link: "/dashboard/testimonials" },
];
