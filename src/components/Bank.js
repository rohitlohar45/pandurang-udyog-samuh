import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Bank = () => {
	return (
		<Box textAlign="center" mt="5%">
			<Heading as="h4" size="lg" mb="20px">
				Bank Approved
			</Heading>
			<Flex direction="column" gap="20px">
				<Flex justify="center" gap="20px">
					<Box flex={1} display="flex" justifyContent="center" alignItems="center">
						<Image
							src="../../assets/img/bank/CSB.jpg"
							alt="bank1"
							borderRadius="8px"
							padding="30px"
							transition="transform 0.3s ease"
							_hover={{ transform: "scale(1.05)" }}
						/>
					</Box>
					<Box flex={1} display="flex" justifyContent="center" alignItems="center">
						<Image
							src="../../assets/img/bank/CBI.jpg"
							alt="bank2"
							borderRadius="8px"
							padding="30px"
							transition="transform 0.3s ease"
							_hover={{ transform: "scale(1.05)" }}
						/>
					</Box>
				</Flex>
				<Flex justify="center" gap="20px">
					<Box flex={1} display="flex" justifyContent="center" alignItems="center">
						<Image
							src="../../assets/img/bank/hdfc.jpg"
							alt="bank3"
							borderRadius="8px"
							padding="30px"
							transition="transform 0.3s ease"
							_hover={{ transform: "scale(1.05)" }}
						/>
					</Box>
					<Box flex={1} display="flex" justifyContent="center" alignItems="center">
						<Image
							src="../../assets/img/bank/IDBI.jpg"
							alt="bank4"
							borderRadius="8px"
							padding="30px"
							transition="transform 0.3s ease"
							_hover={{ transform: "scale(1.05)" }}
						/>
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Bank;
