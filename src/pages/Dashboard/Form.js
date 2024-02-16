import React from "react";
import { Box, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";

function EntryForm() {
	return (
		<Box mt={4}>
			<FormControl>
				<FormLabel>Name</FormLabel>
				<Input type="text" placeholder="Enter name" mb={2} />
				<FormLabel>Email</FormLabel>
				<Input type="email" placeholder="Enter email" mb={4} />
				<Button colorScheme="teal">Submit</Button>
			</FormControl>
		</Box>
	);
}

export default EntryForm;
