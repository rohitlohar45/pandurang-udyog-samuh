import React from "react";
import { Box, Button, List, ListItem, UnorderedList } from "@chakra-ui/react";

function Sidebar() {
	return (
		<Box
			bg="gray.800"
			color="white"
			w="200px"
			h="100vh"
			px={4}
			py={8}
			position="fixed"
			left={0}
			top={0}
			boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
		>
			<UnorderedList>
				<ListItem>
					<Button variant="link" color="white">
						Dashboard
					</Button>
				</ListItem>
				<ListItem>
					<Button variant="link" color="white">
						Profile
					</Button>
				</ListItem>
				<ListItem>
					<Button variant="link" color="white">
						Settings
					</Button>
				</ListItem>
			</UnorderedList>
		</Box>
	);
}

export default Sidebar;
