import React from "react";
import { Box, Grid, Text, Image, chakra } from "@chakra-ui/react";

const Card = ({ imageSrc, text }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="12px" // Increased border-radius for smoother edges
      boxShadow="0 6px 12px rgba(0, 0, 0, 0.25)"
      transition="transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease"
      padding="12px"
      aspectRatio={1}
      bg="white"
      _hover={{
        transform: "scale(1.1)", // Scale effect
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.35)", // Enhanced shadow
        backgroundColor: "red.100", // Background color change on hover
      }}
    >
      <Image
        src={imageSrc}
        alt={text}
        boxSize="100px"
        objectFit="cover"
        borderRadius="full"
        transition="all 0.3s ease" // Transition for smooth animation
      />
      <Text
        fontSize="lg"
        mt="10px"
        fontWeight="bold"
        transition="all 0.3s ease"
      >
        {text}
      </Text>
    </Box>
  );
};

const cardsData = [
  {
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/Aminities%2Finverter_wiring_.png?alt=media&token=373c3a64-3d26-4ec3-9336-ba61b699b315",
    text: "Inverter Wiring",
  },
  {
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/Aminities%2FSolar%20Pannel.png?alt=media&token=eff0dafa-9111-4340-813a-9c234c359c13",
    text: "Solar Provision",
  },
  {
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/Aminities%2FRain_water_harvesting.png?alt=media&token=421fc753-ecf1-484a-9795-714063988056",
    text: "Rain Water Harvesting",
  },
  {
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/pandurang-udyog-samuh.appspot.com/o/Aminities%2Fwater_controller.png?alt=media&token=784ff507-7269-4215-914b-82fa4b47895c",
    text: "Automatic Water Controller",
  },
];

const Amenities = () => {
  return (
    <Box textAlign="center" mt="5%">
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin="auto">
        <chakra.h2
          py={5}
          fontSize={{ base: 32, sm: 48 }}
          fontFamily="Work Sans"
          fontWeight="bold"
        >
          Exclusive Amenities
        </chakra.h2>
      </Box>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap={{ base: 4, md: 8 }} // Responsive gap
      >
        {cardsData.map((card, index) => (
          <Box
            key={`card-${index}`}
            align="center"
            padding={{ base: 10, md: 15 }} // Responsive padding
          >
            <Card imageSrc={card.imageSrc} text={card.text} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Amenities;
