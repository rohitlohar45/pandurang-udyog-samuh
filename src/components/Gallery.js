import React, { useState, useEffect } from "react";
import { Box, SimpleGrid, Text, Image, Heading, Button } from "@chakra-ui/react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { firestore } from "../firebase/initialise";
import Pagination from "./Pagination";

const PAGE_SIZE = 9; // Number of awards per page

const Awards = () => {
	const [awards, setAwards] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalAwards, setTotalAwards] = useState(0);

	const fetchAwards = async () => {
		try {
			const awardsCollectionRef = collection(firestore, "awards");
			const q = query(awardsCollectionRef, orderBy("rank"), limit(PAGE_SIZE));
			const querySnapshot = await getDocs(q);

			const fetchedAwards = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setAwards(fetchedAwards);
			setTotalAwards(querySnapshot.size);
		} catch (error) {
			console.error("Error fetching awards:", error);
		}
	};

	useEffect(() => {
		fetchAwards();
	}, [currentPage]);

	const handleClick = (award) => {
		localStorage.setItem("selectedAward", JSON.stringify(award));
		window.location.href = `award-details/${award.slug}`;
	};

	const totalPages = Math.ceil(totalAwards / PAGE_SIZE);

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage((prevPage) => prevPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage((prevPage) => prevPage - 1);
		}
	};

	return (
		<Box padding={6} textAlign="center" backgroundColor="#f9f9f9">
			<SimpleGrid
				columns={{ base: 1, sm: 2, md: 3 }}
				spacing={8}
				padding={4}
				bg="#f1f1f1"
				borderRadius="md"
			>
				{awards.map((award, index) => (
					<Box
						key={index}
						borderWidth="1px"
						borderRadius="md"
						overflow="hidden"
						boxShadow="lg"
						p={4}
						bg="#fff"
						_hover={{
							transform: "scale(1.05)",
							transition: "0.3s",
							backgroundColor: "#f0f0f0",
						}}
					>
						<Image
							src={award.information.images[0]}
							alt={award.title}
							objectFit="contain"
							width="100%"
							height="350px" // Consistent height
						/>
						<Text fontSize="lg" fontWeight="bold" mt={3} mb={2} color="#555">
							{award.title}
						</Text>
					</Box>
				))}
			</SimpleGrid>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				handlePrevPage={handlePrevPage}
				handleNextPage={handleNextPage}
			/>
		</Box>
	);
};

export default Awards;
