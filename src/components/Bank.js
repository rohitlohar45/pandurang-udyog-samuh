import React from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";

const Bank = () => {
  return (
    <Box textAlign="center" mt="5%">
      <Heading as="h4" size="xl" mb="5px">
        Bank Approved
      </Heading>
      <Flex direction="column" gap="20px">
        <Flex justify="center" gap="20px">
          <Box
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
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
          <Box
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src="https://www.businessinsider.in/photo/75182145/how-to-check-central-bank-of-india-account-balance.jpg?imgsize=23117" // Corrected image source
              alt="CBI Bank"
              borderRadius="8px"
              padding="20px"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.05)" }}
            />
          </Box>
          <Box
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png" // Corrected image source
              alt="HDFC Bank"
              borderRadius="8px"
              padding="20px"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.05)" }}
            />
          </Box>
          <Box
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
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
