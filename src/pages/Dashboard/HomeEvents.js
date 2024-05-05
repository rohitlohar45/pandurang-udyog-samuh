import React, { useEffect, useState } from "react";
import {
	Box,
	Flex,
	Button,
	Spacer,
	Icon,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Select,
	useToast,
	IconButton,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Input,
} from "@chakra-ui/react";
import { MdExitToApp, MdEdit, MdAdd, MdDelete } from "react-icons/md";
import { collection, getDocs, setDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../../firebase/initialise";
import Sidebar from "./Sidebar";
import { handleLogout } from "./Dashboard";

const HomeEvents = () => {
	const [selectedEvents, setSelectedEvents] = useState([]);
	const [allEvents, setAllEvents] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [eventToEdit, setEventToEdit] = useState(null);
	const [newEvent, setNewEvent] = useState(""); // Ensure this variable is defined
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredEvents, setFilteredEvents] = useState([]);
	const toast = useToast({ position: "top" });
	const [index, setIndex] = useState(0);

	const MAX_SELECTED_EVENTS = 3;

	// Fetch all events
	useEffect(() => {
		const fetchAllEvents = async () => {
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

				setAllEvents(eventsData);
				setFilteredEvents(eventsData); // Initialize filtered events with all events
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchAllEvents();
	}, []);

	// Fetch selected events
	useEffect(() => {
		const fetchSelectedEvents = async () => {
			try {
				const selectedEventsCollection = collection(firestore, "selected_events");
				const querySnapshot = await getDocs(selectedEventsCollection);

				const selectedEventsData = [];
				querySnapshot.forEach((doc) => {
					selectedEventsData.push({
						id: doc.id,
						...doc.data(),
					});
				});

				setSelectedEvents(selectedEventsData);
			} catch (error) {
				console.error("Error fetching selected events:", error);
			}
		};

		fetchSelectedEvents();
	}, []);

	const handleEdit = (event, index) => {
		setEventToEdit(event);
		setIndex(index + 1);
		setEditMode(true); // Open the modal
		setNewEvent(""); // Reset newEvent to avoid undefined errors
	};

	const handleModalClose = () => {
		setEditMode(false); // Close the modal
	};

	const handleModalUpdate = async () => {
		try {
			if (eventToEdit && newEvent) {
				const id = "event" + index;
				const eventDoc = doc(firestore, "selected_events", id);
				const selectedEvent = allEvents.find((event) => event.id === newEvent);

				if (selectedEvent) {
					await updateDoc(eventDoc, {
						...selectedEvent,
					});

					setEditMode(false);
					setSelectedEvents((prev) =>
						prev.map((event) => (event.id === eventToEdit.id ? selectedEvent : event))
					);

					toast({
						title: "Event updated successfully.",
						description: "The selected event has been updated.",
						status: "success",
						duration: 3000,
						isClosable: true,
					});
				}
			}
		} catch (error) {
			console.error("Error updating event:", error);
			toast({
				title: "Error updating event.",
				description: "There was a problem updating the event.",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	const handleDelete = async (event) => {
		try {
			const eventDoc = doc(firestore, "selected_events", event.id);
			await deleteDoc(eventDoc);
			toast({
				title: "Event deleted successfully.",
				description: "The selected event has been deleted.",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
			setSelectedEvents((prev) => prev.filter((e) => e.id !== event.id));
		} catch (error) {
			console.error("Error deleting event:", error);
			toast({
				title: "Error deleting event.",
				description: "There was a problem deleting the event.",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase(); // Get the search term
		setSearchTerm(term);

		// Filter events based on the search term
		const results = allEvents.filter((event) => event.name.toLowerCase().includes(term));
		setFilteredEvents(results); // Update filtered events
	};

	return (
		<Flex>
			<Sidebar />
			<Box ml="20px" p={4} w="100%">
				<Flex mb={4}>
					<Spacer />
					<Button
						onClick={() => handleLogout(toast)}
						variant="ghost"
						colorScheme="teal"
						leftIcon={<Icon as={MdExitToApp} />}
					>
						Logout
					</Button>
				</Flex>
				<Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
					<Table variant="striped">
						<Thead>
							<Tr>
								<Th>Index</Th>
								<Th>Event Name</Th>
								<Th>Action</Th>
							</Tr>
						</Thead>
						<Tbody>
							{selectedEvents.map((event, index) => (
								<Tr key={event.id}>
									<Td>Event {index + 1}</Td>
									<Td>{event.title}</Td>
									<Td>
										<IconButton
											icon={<MdEdit />}
											onClick={() => handleEdit(event, index)} // Open modal to edit
											aria-label="Edit Event"
										/>
										<IconButton
											icon={<MdDelete />}
											aria-label="Delete Event"
											onClick={() => handleDelete(event)}
										/>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</Box>
			</Box>

			{/* Modal for Editing Event */}
			<Modal isOpen={editMode} onClose={handleModalClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Edit Event</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Select
							placeholder="Select Event"
							value={newEvent}
							onChange={(e) => setNewEvent(e.target.value)} // Ensure setNewEvent is defined
						>
							{filteredEvents.map((event) => (
								<option key={event.id} value={event.id}>
									{event.title}
								</option>
							))}
						</Select>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="teal" onClick={handleModalUpdate}>
							Update
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Flex>
	);
};

export default HomeEvents;
