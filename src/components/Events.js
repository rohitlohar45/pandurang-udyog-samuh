import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Box, Grid, Image, Text } from "@chakra-ui/react";
const Events = () => {
  const events = [
    {
      title: "Best banana bunch award",
      description: "This is the best banana bunch award",
      imageUrl: "assets/img/awards/best-banana-bunch-award.jpg",
    },
    {
      title: "Best banana bunch award",
      description: "This is the best banana bunch award",
      imageUrl: "assets/img/awards/best-banana-bunch-award.jpg",
    },
    {
      title: "Best banana bunch award",
      description: "This is the best banana bunch award",
      imageUrl: "assets/img/awards/best-banana-bunch-award.jpg",
    },
  ];
  return (
    <>
      <div
        className="section-title text-center"
        style={{ marginBottom: "0", marginTop: "5%" }}
      >
        <h4 className="subtitle style-2">Events</h4>
      </div>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={10}
      >
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
            />{" "}
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
  );
};

export default Events;
