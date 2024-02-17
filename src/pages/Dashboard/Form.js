import React, { useState } from "react";
import { Box, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";

function EntryForm({ handleCreateEntry }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	return (
		<Box mt={4}>
			<FormControl>
				<FormLabel>Name</FormLabel>
				<Input
					type="text"
					placeholder="Enter name"
					mb={2}
					onChange={(e) => setName(e.target.value)}
				/>
				<FormLabel>Email</FormLabel>
				<Input
					type="email"
					placeholder="Enter email"
					mb={4}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Button colorScheme="teal" onClick={() => handleCreateEntry(name, email)}>
					Submit
				</Button>
			</FormControl>
		</Box>
	);
}

export default EntryForm;
