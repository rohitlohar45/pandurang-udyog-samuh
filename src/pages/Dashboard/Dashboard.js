import React, { useState, useEffect } from "react";
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
import { signOut } from "firebase/auth";
import EntryForm from "./Form";
import Sidebar from "./Sidebar";
import { auth, firestore } from "../../firebase/initialise";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { handleCreateEntry, handleDelete, handleEdit } from "./Utils";

function Dashboard() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast({ position: "top" });

	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				toast({
					title: "Logout Success",
					description: "Logout Success",
					status: "info",
					duration: 900,
					isClosable: true,
					containerStyle: {
						marginTop: "40px",
						width: "400px",
					},
				});
				window.location.href = "/login";
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const [searchTerm, setSearchTerm] = useState("");
	const [data, setData] = useState([]);

	// Fetch data from Firestore on component mount
	useEffect(() => {
		const fetchData = async () => {
			try {
				const eventsCollection = collection(firestore, "events");
				const querySnapshot = await getDocs(eventsCollection);

				const eventsData = [];
				querySnapshot.forEach((doc) => {
					eventsData.push({
						id: doc.id,
						...doc.data(),
					});
				});

				setData(eventsData);
			} catch (error) {
				console.error("Error fetching data: ", error);
				// Handle error, perhaps display a toast or message to the event
			}
		};

		fetchData();
	}, []);

	const filteredData = data.filter((data) =>
		data?.title?.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<Flex>
			<Sidebar />
			<Box ml="200px" p={4} w="100%">
				<Flex mb={4}>
					<IconButton
						icon={<Icon as={MdMenu} />}
						aria-label="Menu"
						onClick={onOpen}
						display={{ base: "block", md: "none" }}
					/>
					<Spacer />
					<Button
						right="10"
						onClick={handleLogout}
						variant="ghost"
						colorScheme="teal"
						leftIcon={<Icon as={MdExitToApp} />}
					>
						Logout
					</Button>
				</Flex>
				<Flex p={4}>
					{/* Search input on the left */}
					<Input
						placeholder="Search"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					{/* Spacer to push the create entry button to the right */}
					<Spacer />
					{/* Create entry button on the right */}
					<Button onClick={onOpen}>Create Entry</Button>
				</Flex>
				<Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
					<Text fontSize="xl" mb={4}>
						Event Data
					</Text>
					<Table variant="striped" colorScheme="gray">
						<Thead>
							<Tr>
								<Th>Name</Th>
								<Th>Description</Th>
								<Th>Actions</Th>
							</Tr>
						</Thead>
						<Tbody>
							{filteredData.map((event) => (
								<Tr key={event.id}>
									<Td>{event.title}</Td>
									<Td>{event.description}</Td>
									<Td>
										<IconButton
											icon={<Icon as={MdEdit} />}
											aria-label="Edit"
											onClick={() => handleEdit(event.id)}
											mr={2}
										/>
										<IconButton
											icon={<Icon as={MdDelete} />}
											aria-label="Delete"
											onClick={() => handleDelete(event.id)}
										/>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</Box>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Create Entry</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<EntryForm
								handleCreateEntry={handleCreateEntry}
								onClose={onClose}
								setData={setData}
							/>
						</ModalBody>
					</ModalContent>
				</Modal>
			</Box>
		</Flex>
	);
}

export default Dashboard;
