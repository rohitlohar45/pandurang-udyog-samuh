// context/AppContext.js
import { collection, getDocs, query } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { firestore } from "../firebase/initialise";

// Create a context for the global variable
const AppContext = createContext();

// Custom hook to use the AppContext
export const useAppContext = () => {
	return useContext(AppContext);
};

// Context provider component
export const AppProvider = ({ children }) => {
	// This is the global state, you can add more variables as needed
	const [globalVariable, setGlobalVariable] = useState(null);

	const [servicePages, setServicePages] = useState([]);

	const createSlug = (title) => {
		return title
			.toLowerCase() // Convert to lowercase
			.replace(/['’]/g, "") // Remove apostrophes (single quotes)
			.replace(/[()]/g, "") // Remove parentheses
			.replace(/[^a-z0-9]+/g, "-") // Replace all non-alphanumeric characters with hyphens
			.replace(/^-|-$/g, ""); // Trim leading and trailing hyphens
	};

	const fetchServices = async (page) => {
		try {
			const servicesCollectionRef = collection(firestore, "services");
			const q = query(servicesCollectionRef);

			const querySnapshot = await getDocs(q);

			const fetchedServices = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				name: doc.data().information.title,
				slug: createSlug(doc.data().information.title),
				description: doc.data().information.description1,
			}));
			setServicePages(fetchedServices);
		} catch (error) {
			console.error("Error fetching awards:", error);
		}
	};

	useEffect(() => {
		fetchServices();
	}, []);

	return <AppContext.Provider value={{ servicePages }}>{children}</AppContext.Provider>;
};
