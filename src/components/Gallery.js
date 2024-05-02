import React, { useState, useEffect } from "react";
import { Box, Grid, Text, Image } from "@chakra-ui/react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { firestore } from "../firebase/initialise";
import Pagination from "./Pagination";

const PAGE_SIZE = 6; // Number of awards per page

const Awards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalAwards, setTotalAwards] = useState(0);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsRef = collection(firestore, "events");
        const eventsQuery = query(
          eventsRef,
          orderBy("createdAt"),
          limit(PAGE_SIZE),
          startAfter((currentPage - 1) * PAGE_SIZE)
        );
        const querySnapshot = await getDocs(eventsQuery);

        const eventsData = [];
        querySnapshot.forEach((doc) => {
          eventsData.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setEvents(eventsData);
        setTotalAwards(querySnapshot.size);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const totalPages = Math.ceil(totalAwards / PAGE_SIZE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <div
        className="section-title text-center"
        style={{ marginBottom: "0", marginTop: "5%" }}
      >
        <h4 className="subtitle style-2">Events</h4>
      </div>
      <Box padding={6} textAlign="center" backgroundColor="#f9f9f9">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={10}
        >
          {events.map((event) => (
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
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      </Box>
    </>
  );
};

export default Awards;
