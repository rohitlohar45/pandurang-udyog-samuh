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
			.toLowerCase()
			.replace(/[()]/g, "")
			.replace(/[^a-z0-9]+/g, "-")
			.replace(/^-|-$/g, "");
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
