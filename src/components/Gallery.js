import React, { useState, useEffect } from "react";
import { Box, Grid, Text, Image } from "@chakra-ui/react";
import { collection, getDocs, query, orderBy, limit, startAfter } from "firebase/firestore";
import { firestore } from "../firebase/initialise";
import Pagination from "./Pagination";

const PAGE_SIZE = 9; // Number of awards per page

const Awards = () => {
	const [awards, setAwards] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalAwards, setTotalAwards] = useState(0);

	const fetchAwards = async (page) => {
		try {
			const awardsCollectionRef = collection(firestore, "events");
			const q = query(awardsCollectionRef);

			const querySnapshot = await getDocs(q);

			console.log("Total awards:", querySnapshot.size);

			const fetchedAwards = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setAwards(fetchedAwards.sort((a, b) => a.rank - b.rank));
			setTotalAwards(querySnapshot.size);

			console.log(fetchedAwards);
		} catch (error) {
			console.error("Error fetching awards:", error);
		}
	};

	useEffect(() => {
		fetchAwards(currentPage);
	}, [currentPage]);

	const handleClick = (award) => {
		localStorage.setItem("selectedEvent", JSON.stringify(award));
		const top5Awards = awards.slice(0, 5);
		localStorage.setItem("top5Awards", JSON.stringify(top5Awards));
		window.location.href = `gallery-details/${award.slug}`;
	};

	const totalPages = Math.ceil(totalAwards / PAGE_SIZE);

	const handleNextPage = () => {
		if (currentPage === totalPages) return;
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handlePrevPage = () => {
		if (currentPage === 1) return;
		setCurrentPage((prevPage) => prevPage - 1);
	};

	return (
		<div style={{ padding: "50px", textAlign: "center" }}>
			<div style={{ marginBottom: "20px" }}>
				<h2>Check out our latest awards!</h2>
			</div>
			<Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={10} p={20}>
				{awards.map((award, index) => (
					<Box
						key={index}
						borderWidth="1px"
						borderRadius="lg"
						overflow="hidden"
						boxShadow="xl"
						p={4}
						onClick={() => handleClick(award)}
						_hover={{ cursor: "pointer" }}
					>
						<Image
							src={award.information?.images[0]}
							alt={award.title}
							width="100%"
							height="350px"
							objectFit="contain"
						/>
						<Box p={4}>
							<Text fontSize="xl" fontWeight="bold" mb={2}>
								{award.title}
							</Text>
						</Box>
					</Box>
				))}
			</Grid>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				handlePrevPage={handlePrevPage}
				handleNextPage={handleNextPage}
			/>
		</div>
	);
};

export default Awards;
