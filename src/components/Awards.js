import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firestore, storage } from "../firebase/initialise";

const Awards = () => {
	const [awards, setAwards] = React.useState([]);

	const fetchData = async () => {
		try {
			const awards = collection(firestore, "awards");
			const querySnapshot = await getDocs(awards);
			const awardContent = [];
			const updatedAwards = {};

			querySnapshot.forEach((doc) => {
				awardContent.push({
					id: doc.id,
					...doc.data(),
				});
			});
			awardContent.sort((a, b) => a.rank - b.rank);
			return awardContent;
		} catch (error) {
			console.error("Error:", error);
		}
	};

	useEffect(() => {
		fetchData().then((awardsData) => {
			setAwards(awardsData);
			console.log(awardsData);
		});
	}, []);

	// const cachedAwards = useMemo(() => awards, [awards]);

	const handleClick = (award) => {
		console.log(award);
		localStorage.setItem("selectedAward", JSON.stringify(award));
		// store top 5 awards in local storage
		const top5Awards = awards.sort((a, b) => a.rank - b.rank).slice(0, 5);
		localStorage.setItem("top5Awards", JSON.stringify(top5Awards));

		window.location.href = `award-details/${award.slug}`;
	};

	function conatins(id) {
		if (
			id == "foundation-kolhapur" ||
			id == "hp-petroleum-corporation" ||
			id == "best-performance-award-yara"
		) {
			return true;
		}
	}

	return (
		<div style={{ padding: "50px", textAlign: "center" }}>
			<div style={{ marginBottom: "20px" }}>
				<h2>Check out our latest awards!</h2>
			</div>
			<Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={10} p={20}>
				{awards?.map(
					(award, index) =>
						!conatins(award.id) && (
							<Box
								key={index}
								borderWidth="1px"
								borderRadius="lg"
								overflow="hidden"
								boxShadow="xl"
								p={4}
								// onClick={() => handleClick(award.slug)}
								// _hover={{ cursor: "pointer" }}
							>
								<Image
									src={award.information.images[0]}
									alt={award.title}
									width="100%"
									height="250px"
									objectFit="cover"
								/>
								<Box p={4}>
									<Text fontSize="xl" fontWeight="bold" mb={2}>
										{award.title}
									</Text>
								</Box>
							</Box>
						)
				)}
			</Grid>
		</div>
	);
};

export default Awards;
