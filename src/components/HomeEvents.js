import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Image, Text, chakra } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/initialise";
import { useNavigate } from "react-router-dom";

const HomeEvents = () => {
	const [events, setAllEvents] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		// Fetch all events from Firebase
		const fetchAllEvents = async () => {
			try {
				const eventsCollection = collection(firestore, "selected_events");
				const querySnapshot = await getDocs(eventsCollection);

				const eventsData = [];
				querySnapshot.forEach((doc) => {
					eventsData.push({
						id: doc.id,
						...doc.data(),
					});
				});
				setAllEvents(eventsData);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchAllEvents();
	}, []);

	return (
		<div className="section-title text-center" style={{ padding: "20px" }}>
			<chakra.h2 py={5} fontSize={{ base: 32, sm: 48 }} fontFamily="Work Sans" fontWeight="bold">
				Events
			</chakra.h2>
			<Box padding={15} textAlign="center" backgroundColor="#f9f9f9">
				<Grid
					templateColumns={{
						base: "repeat(1, 1fr)",
						sm: "repeat(2,1fr)",
						md: "repeat(3, 1fr)",
					}}
					gap={25}
				>
					{events?.map((event) => (
						<Box
							key={event.id}
							borderWidth="1px"
							borderRadius="lg"
							overflow="hidden"
							boxShadow="xl"
							p={4}
						>
							<Image
								src={event.imageUrl}
								alt={event.title}
								width="100%"
								height="250px"
								objectFit="contain"
							/>
							<Box p={4}>
								<Text fontSize="xl" fontWeight="bold" mb={2}>
									{event.name}
								</Text>
							</Box>
						</Box>
					))}
				</Grid>
			</Box>
			<Button
				onClick={() => navigate("/gallery")}
				background="red"
				color="white"
				_hover={{
					background: "red.500",
					color: "white",
				}}
			>
				View More
			</Button>
		</div>
	);
};

export default HomeEvents;
