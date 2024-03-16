import React, { useEffect } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

function Pagination({ currentPage, totalPages, handlePrevPage, handleNextPage }) {
	useEffect(() => {
		console.log("Pagination component mounted", currentPage, totalPages);
	}, []);

	return (
		<Flex justifyContent="center" alignItems="center" mt={4}>
			<Button
				onClick={handlePrevPage}
				disabled={currentPage === 1}
				mr={4}
				colorScheme="teal"
				variant="outline"
				_hover={{ bg: "teal.100" }}
			>
				Previous
			</Button>
			<Text fontSize="lg" fontWeight="bold">
				{`Page ${currentPage} of ${totalPages}`}
			</Text>
			<Button
				onClick={handleNextPage}
				disabled={currentPage === totalPages}
				ml={4}
				colorScheme="teal"
				variant="outline"
				_hover={{ bg: "teal.100" }}
			>
				Next
			</Button>
		</Flex>
	);
}

export default Pagination;
