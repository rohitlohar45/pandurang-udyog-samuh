import React from "react";
import { Box, Flex, chakra, Image } from "@chakra-ui/react";

const Bank = () => {
	return (
		<Box textAlign="center" mt="5%">
			<Box width={{ base: "full", sm: "lg", lg: "xl" }} margin="auto">
				<chakra.h2 py={5} fontSize={{ base: 32, sm: 48 }} fontFamily="Work Sans" fontWeight="bold">
					Bank Approved
				</chakra.h2>
			</Box>
			<Flex direction="column">
				<Flex justify="center">
					<Box flex="1" display="flex" justifyContent="center" alignItems="center">
						<Image
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/CSB_Bank_New_Logo-02.svg/2560px-CSB_Bank_New_Logo-02.svg.png" // Corrected image source
							alt="CSB Bank"
							borderRadius="8px"
							padding="20px" // Reduced padding for consistency
							transition="transform 0.3s ease"
							_hover={{
								transform: "scale(1.05)",
							}}
						/>
					</Box>
					<Box flex="1" display="flex" justifyContent="center" alignItems="center">
						<Image
							src="https://www.businessinsider.in/photo/75182145/how-to-check-central-bank-of-india-account-balance.jpg?imgsize=23117" // Corrected image source
							alt="CBI Bank"
							borderRadius="8px"
							padding="20px"
							transition="transform 0.3s ease"
							_hover={{ transform: "scale(1.05)" }}
						/>
					</Box>
					<Box flex="1" display="flex" justifyContent="center" alignItems="center">
						<Image
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png" // Corrected image source
							alt="HDFC Bank"
							borderRadius="8px"
							padding="20px"
							transition="transform 0.3s ease"
							_hover={{ transform: "scale(1.05)" }}
						/>
					</Box>
					<Box flex="1" display="flex" justifyContent="center" alignItems="center">
						<Image
							src="https://1000logos.net/wp-content/uploads/2021/05/IDBI-Bank-logo.jpg" // Corrected image source
							alt="IDBI Bank"
							borderRadius="8px"
							padding="20px"
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
