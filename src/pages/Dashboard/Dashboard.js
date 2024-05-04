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
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { MdMenu, MdExitToApp, MdEdit, MdDelete } from "react-icons/md";
import { signOut } from "firebase/auth";
import EntryForm from "./Form";
import Sidebar from "./Sidebar";
import { auth, firestore } from "../../firebase/initialise";
import { collection, getDocs } from "firebase/firestore";
import { handleCreateEntry, handleDelete } from "./Utils";

export const handleLogout = (toast) => {
  signOut(auth)
    .then(() => {
      toast({
        title: "Logout Success",
        description: "Logout Success",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      window.location.href = "/login";
    })
    .catch((error) => {
      console.error(error);
    });
};

function Events() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast({ position: "top" });
  const [id, setId] = useState(null);

  const closeModal = () => {
    setId(null);
    // console.log("close modal");
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
        const eventsCollection = collection(firestore, "events");
        const querySnapshot = await getDocs(eventsCollection);

        const eventsData = [];
        querySnapshot.forEach((doc) => {
          eventsData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setFilteredData(eventsData);
        setData(eventsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const searchedData = filteredData.filter((data) =>
        data?.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      // console.log(searchedData);
      setFilteredData(searchedData);
    } else {
      setFilteredData(data);
    }
  }, [searchTerm]);

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
          <Button onClick={onOpen}>Create Entry</Button>
        </Flex>
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>Title</Th>
                {/* <Th>Description</Th> */}
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredData.map((event) => (
                <Tr key={event.id}>
                  <Td>{event?.name || event?.title}</Td>
                  {/* <Td>{event.description}</Td> */}
                  <Td>
                    <IconButton
                      icon={<Icon as={MdEdit} />}
                      aria-label="Edit"
                      onClick={() => edit(event.id)}
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
        <Modal isOpen={isOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Entry</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <EntryForm
                handleCreateEntry={handleCreateEntry}
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
}

export default Events;
