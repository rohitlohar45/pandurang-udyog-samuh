import React, { useState, useEffect } from "react";
import {
	Box,
	Flex,
	Button,
	Spacer,
	IconButton,
	Icon,
	Input,
	useDisclosure,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
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
import { auth, firestore } from "../../firebase/initialise";
import { doc, collection, getDocs } from "firebase/firestore";
import Sidebar from "./Sidebar";
import { handleDeleteTestimonial, handleCreateTestimonial } from "./Utils"; // Implement these for testimonials
import TestimonialEntryForm from "./TestimonialsForm";

const handleLogout = (toast) => {
	signOut(auth)
		.then(() => {
			toast({
				title: "Logout Success",
				description: "You have been logged out successfully.",
				status: "success",
				duration: 2000,
				isClosable: true,
			});
			window.location.href = "/login"; // Redirect after logout
		})
		.catch((error) => {
			console.error("Error during logout:", error);
		});
};

const Testimonials = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast({ position: "top" });
	const [id, setId] = useState(null);

	const closeModal = () => {
		setId(null);
		onClose();
	};

	const edit = (id) => {
		setId(id);
		onOpen();
	};

	const [searchTerm, setSearchTerm] = useState("");
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState(data);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const testimonialsCollection = collection(firestore, "testimonials");
				const querySnapshot = await getDocs(testimonialsCollection);

				const testimonialsData = [];
				querySnapshot.forEach((doc) => {
					testimonialsData.push({
						id: doc.id,
						...doc.data(),
					});
				});

				setData(testimonialsData);
				setFilteredData(testimonialsData);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};

		fetchData();
	}, []);

	const handleDelete = async (id) => {
		try {
			await handleDeleteTestimonial(id, toast);
			setFilteredData(filteredData.filter((item) => item.id !== id));
			setData(data.filter((item) => item.id !== id));
		} catch (e) {}
	};

	const handleCreate = async (formData) => {
		try {
			await handleCreateTestimonial(formData, toast);
			setFilteredData([...filteredData, formData]);
			setData([...data, formData]);
		} catch (error) {
			console.error("Error creating testimonial:", error);
		}
	};

	useEffect(() => {
		if (searchTerm) {
			const searchedData = data.filter((item) =>
				item?.title?.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setFilteredData(searchedData);
		} else {
			setFilteredData(data);
		}
	}, [searchTerm, data]);

	return (
		<Flex>
			<Sidebar /> {/* Adjust Sidebar for Testimonials if needed */}
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
						placeholder="Search Testimonials"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<Spacer />
					<Button onClick={onOpen}>Create Testimonial</Button>{" "}
					{/* Open modal for new testimonial */}
				</Flex>

				<Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
					<Table variant="striped" colorScheme="gray">
						<Thead>
							<Tr>
								<Th>Title</Th>
								<Th>Description</Th>
								<Th>Actions</Th>
							</Tr>
						</Thead>
						<Tbody>
							{filteredData.map((item) => (
								<Tr key={item.id}>
									<Td>{item?.title}</Td>
									<Td>{item?.content}</Td>
									<Td>
										<IconButton
											icon={<Icon as={MdEdit} />}
											aria-label="Edit"
											onClick={() => edit(item.id)}
										/>
										<IconButton
											icon={<Icon as={MdDelete} />}
											aria-label="Delete"
											onClick={() => handleDelete(item.id, toast)} // Implement this
										/>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</Box>

				<Modal isOpen={isOpen} onClose={closeModal}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Testimonial Entry</ModalHeader> {/* Adjust header text */}
						<ModalCloseButton />
						<ModalBody>
							<TestimonialEntryForm
								handleCreateEntry={handleCreate} // Implement this function
								onClose={closeModal}
								setData={setFilteredData}
								id={id}
							/>
						</ModalBody>
					</ModalContent>
				</Modal>
			</Box>
		</Flex>
	);
};

export default Testimonials;
