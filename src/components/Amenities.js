import React from "react";
import { Box, Grid, Heading, Text, Image } from "@chakra-ui/react";

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
      <Text fontSize="lg" mt="10px" transition="all 0.3s ease">
        {text}
      </Text>
    </Box>
  );
};

const cardsData = [
  {
    imageSrc: "http://anuragdevelopers.com/img/icons/inverter_wiring_.png",
    text: "Inverter Wiring",
  },
  {
    imageSrc: "http://anuragdevelopers.com/img/icons/Solar%20Pannel.png",
    text: "Solar Provision",
  },
  {
    imageSrc: "http://anuragdevelopers.com/img/icons/Rain_water_harvesting.png",
    text: "Rain Water Harvesting",
  },
  {
    imageSrc: "http://anuragdevelopers.com/img/icons/water_controller.png",
    text: "Automatic Water Controller",
  },
];

const Amenities = () => {
  return (
    <Box textAlign="center">
      <Heading as="h2" size="xl" paddingBottom={{ base: 10 }}>
        Exclusive Amenities
      </Heading>
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
