import React from "react";
import { Box, Grid, Heading, Text, Icon } from "@chakra-ui/react";
import { FaHeart, FaStar, FaBookmark } from "react-icons/fa";

const Card = ({ icon, text }) => {
	const getIcon = () => {
		switch (icon) {
			case "favorite":
				return FaHeart;
			case "star":
				return FaStar;
			case "bookmark":
				return FaBookmark;
			default:
				return null;
		}
	};

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			borderRadius="8px"
			boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
			transition="transform 0.3s ease"
			p="12px"
			aspectRatio={1}
			_hover={{ transform: "scale(1.05)" }}
		>
			<Icon as={getIcon()} boxSize={12} />
			<Text fontSize="sm" mt="10px">
				{text}
			</Text>
		</Box>
	);
};

const cardsData = [
	{ icon: "favorite", text: "Card 1" },
	{ icon: "star", text: "Card 2" },
	{ icon: "bookmark", text: "Card 3" },
	{ icon: "favorite", text: "Card 4" },
	{ icon: "star", text: "Card 5" },
	{ icon: "bookmark", text: "Card 6" },
	{ icon: "favorite", text: "Card 7" },
	{ icon: "star", text: "Card 8" },
];

const Amenities = () => {
	const chunkedCards = [cardsData.slice(0, 4), cardsData.slice(4, 8)];

	return (
		<Box textAlign="center" p={{ base: "20px", md: "40px" }}>
			{" "}
			{/* Responsive padding */}
			<Heading as="h2" size="lg" mb={4}>
				Exclusive Amenities
			</Heading>
			<Grid
				templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
				gap={{ base: 4, md: 8 }}
			>
				{chunkedCards.flatMap((chunk, chunkIndex) =>
					chunk.map((card, cardIndex) => (
						<Box
							key={`chunk-${chunkIndex}-card-${cardIndex}`}
							align="center"
							p={{ base: 10, md: 20 }}
						>
							<Card icon={card.icon} text={card.text} />
						</Box>
					))
				)}
			</Grid>
		</Box>
	);
};

export default Amenities;
