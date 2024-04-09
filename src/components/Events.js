import React, { useEffect, useState } from "react";
import { Box, Grid, Image, Text } from "@chakra-ui/react";
import { auth, firestore } from "../firebase/initialise";
import { collection, addDoc, getDocs } from "firebase/firestore";

const Events = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const events = collection(firestore, "events");
				const querySnapshot = await getDocs(events);

				const eventsData = [];
				querySnapshot.forEach((doc) => {
					eventsData.push({
						id: doc.id,
						...doc.data(),
					});
				});

				setEvents(eventsData);
				// // console.log(events);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};

		fetchData();
	}, []);
	return (
		<>
			{events.length === 0 ? (
				<p></p>
			) : (
				<>
					<div className="section-title text-center" style={{ marginBottom: "0", marginTop: "5%" }}>
						<h4 className="subtitle style-2">Events</h4>
					</div>

					<Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={10}>
						{events.map((event, index) => (
							<Box
								key={index}
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
									objectFit="cover"
								/>
								<Box p={4}>
									<Text fontSize="xl" fontWeight="bold" mb={2}>
										{event.title}
									</Text>
									<Text fontSize="l" mb={2}>
										{event.description}
									</Text>
								</Box>
							</Box>
						))}
					</Grid>
				</>
			)}
		</>
	);
};

export default Events;
