import { useEffect, useState } from "react";
import {
	Box,
	Flex,
	Button,
	Spacer,
	IconButton,
	Icon,
	useDisclosure,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Text,
	Input,
	useToast,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";
import { MdMenu, MdExitToApp, MdEdit, MdDelete } from "react-icons/md";
import firebase from "firebase/app";
import "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/initialise";
import Sidebar from "./Sidebar";
import { handleLogout } from "./Dashboard";

const Queries = () => {
	const [queries, setQueries] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const toast = useToast({ position: "top" });

	useEffect(() => {
		// Fetch queries from Firebase
		const fetchQueries = async () => {
			try {
				const eventsCollection = collection(firestore, "queries");
				const querySnapshot = await getDocs(eventsCollection);

				const eventsData = [];
				querySnapshot.forEach((doc) => {
					eventsData.push({
						id: doc.id,
						...doc.data(),
					});
				});
				console.log(eventsData);

				setQueries(eventsData);
				setSearchResults(eventsData);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};

		fetchQueries();
	}, []);

	useEffect(() => {
		if (searchTerm === "") {
			setSearchResults(queries);
		} else {
			// query on all fields
			const results = queries.filter(
				(query) =>
					query.user_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					query.user_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
					query.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
					query.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
					query.phone_number.toLowerCase().includes(searchTerm.toLowerCase())
			);

			setSearchResults(results);
		}
	}, [searchTerm]);

	return (
		<Flex>
			<Sidebar />
			<Box ml="20px" p={4} w="100%">
				<Flex mb={4}>
					<Spacer />
					<Button
						right="10"
						onClick={() => handleLogout(toast)}
						variant="ghost"
						colorScheme="teal"
						leftIcon={<Icon as={MdExitToApp} />}
					>
						Logout
					</Button>
				</Flex>
				<Flex p={4}>
					<Input
						placeholder="Search"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						width={{ base: "100%", md: "50%" }}
					/>
					<Spacer />
				</Flex>
				<Box p={4} w="100%">
					<Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
						<Table variant="striped">
							<Thead>
								<Tr>
									<Th>User Name</Th>
									<Th>User Email</Th>
									<Th>Subject</Th>
									<Th>Message</Th>
									<Th>Phone Number</Th>
								</Tr>
							</Thead>
							<Tbody>
								{searchResults.map((query) => (
									<Tr key={query.id}>
										<Td>{query.user_name}</Td>
										<Td>{query.user_email}</Td>
										<Td>{query.subject}</Td>
										<Td>{query.message}</Td>
										<Td>{query.phone_number}</Td>
									</Tr>
								))}
							</Tbody>
						</Table>
					</Box>
				</Box>
			</Box>
		</Flex>
	);
};

export default Queries;
