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
import Sidebar from "./Sidebar";
import { auth, firestore } from "../../firebase/initialise";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import ServiceEntryForm from "./ServiceForm";
import { handleCreateService } from "./Utils"; // Function to handle creating a service

const handleLogout = (toast) => {
	signOut(auth)
		.then(() => {
			toast({
				title: "Logout Success",
				description: "You have been successfully logged out.",
				status: "success",
				duration: 2000,
				isClosable: true,
			});
			window.location.href = "/login"; // Redirect to login page
		})
		.catch((error) => {
			console.error("Error during logout:", error);
			toast({
				title: "Logout Error",
				description: "An error occurred while logging out. Please try again.",
				status: "error",
				duration: 2000,
				isClosable: true,
			});
		});
};

const Services = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast({ position: "top" });
	const [serviceId, setServiceId] = useState(null);

	const closeModal = () => {
		setServiceId(null); // Clear the service ID
		onClose(); // Close the modal
	};

	const editService = (id) => {
		setServiceId(id); // Set the service ID for editing
		onOpen(); // Open the modal
	};

	const deleteService = async (id) => {
		try {
			const docRef = doc(collection(firestore, "services"), id);
			await deleteDoc(docRef); // Delete the document from Firestore
			setFilteredData((prev) => prev.filter((service) => service.id !== id));
			toast({
				title: "Service Deleted",
				description: "The service has been successfully deleted.",
				status: "success",
				duration: 2000,
				isClosable: true,
			});
		} catch (error) {
			console.error("Error deleting service:", error);
			toast({
				title: "Error Deleting Service",
				description: "An error occurred while deleting the service. Please try again.",
				status: "error",
				duration: 2000,
				isClosable: true,
			});
		}
	};

	const [searchTerm, setSearchTerm] = useState("");
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	// Fetch data from Firestore on component mount
	useEffect(() => {
		const fetchData = async () => {
			try {
				const servicesCollection = collection(firestore, "services");
				const querySnapshot = await getDocs(servicesCollection);

				const servicesData = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));

				setData(servicesData); // Store the full dataset
				setFilteredData(servicesData); // Initialize filtered data
			} catch (error) {
				console.error("Error fetching data:", error);
				toast({
					title: "Error Fetching Data",
					description: "An error occurred while fetching data. Please try again.",
					status: "error",
					duration: 2000,
					isClosable: true,
				});
			}
		};

		fetchData();
	}, []); // Empty dependency array to run once on component mount

	// Handle search term change and update filtered data
	useEffect(() => {
		if (searchTerm) {
			const searchedData = data.filter((service) =>
				service?.title?.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setFilteredData(searchedData); // Update filtered data based on search
		} else {
			setFilteredData(data); // Reset to full dataset if search term is empty
		}
	}, [searchTerm, data]); // Dependencies for search effect

	return (
		<Flex>
			<Sidebar />
			<Box ml="20px" p={4} w="100%">
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
					/>
					<Spacer />
					<Button onClick={onOpen}>Create Service</Button>
				</Flex>
				<Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
					<Table variant="striped" colorScheme="gray">
						<Thead>
							<Tr>
								<Th>Service Title</Th>
								<Th>Actions</Th>
							</Tr>
						</Thead>
						<Tbody>
							{filteredData.map((service) => (
								<Tr key={service.id}>
									<Td>{service?.information.title || "Unnamed Service"}</Td>
									<Td>
										<IconButton
											icon={<Icon as={MdEdit} />}
											aria-label="Edit"
											onClick={() => editService(service.id)}
											mr={2}
										/>
										<IconButton
											icon={<Icon as={MdDelete} />}
											aria-label="Delete"
											onClick={() => deleteService(service.id)}
										/>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</Box>
				<Modal isOpen={isOpen} onClose={closeModal} size="xl">
					{" "}
					{/* Set size to 'xl' for a wider modal */}
					<ModalOverlay />
					<ModalContent maxW="800px">
						{" "}
						{/* Adjust maxW for the desired width */}
						<ModalHeader>{serviceId ? "Edit Service" : "Create Service"}</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<ServiceEntryForm
								serviceId={serviceId}
								handleCreateEntry={handleCreateService}
								onClose={closeModal}
								setFilteredData={setFilteredData}
							/>
						</ModalBody>
					</ModalContent>
				</Modal>
			</Box>
		</Flex>
	);
};

export default Services;
