import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaHeart, FaStar, FaBookmark } from "react-icons/fa"; // Import icons from react-icons

const Card = ({ icon, text }) => {
	const getIcon = () => {
		switch (icon) {
			case "favorite":
				return <FaHeart />;
			case "star":
				return <FaStar />;
			case "bookmark":
				return <FaBookmark />;
			default:
				return null;
		}
	};

	return (
		<Box
			w="100%"
			h="100%"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			borderRadius="10px"
			boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
			transition="transform 0.3s ease"
			p="20px"
			_hover={{ transform: "scale(1.05)" }}
		>
			<Flex flexDirection="column" alignItems="center">
				<Icon as={getIcon()} boxSize={16} /> {/* Setting size to 64px */}
				<Text fontSize="md" mt="10px">
					{text}
				</Text>
			</Flex>
		</Box>
	);
};

export default Card;
