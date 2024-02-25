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
// import ClippedDrawer from "../../components/Drawer";

function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast({
          title: "Logout Success",
          description: "Logout Success",
          status: "success",
          duration: 9000,
          isClosable: true,
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
        const usersCollection = collection(firestore, "users");
        const querySnapshot = await getDocs(usersCollection);

        const usersData = [];
        querySnapshot.forEach((doc) => {
          usersData.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setData(usersData);
      } catch (error) {
        console.error("Error fetching data: ", error);
        // Handle error, perhaps display a toast or message to the user
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Flex>
      <Sidebar display={"none"} />
      <Box p={4} w="100%">
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
            colorScheme="red"
            leftIcon={<Icon as={MdExitToApp} />}
          >
            Logout
          </Button>
        </Flex>
        <Flex p={4}>
          {/* Search input on the left */}
          <Input
            style={{ width: "75%", marginLeft: "5%" }}
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
            User Data
          </Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredData.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    <IconButton
                      icon={<Icon as={MdEdit} />}
                      aria-label="Edit"
                      onClick={() => handleEdit(user.id)}
                      mr={2}
                    />
                    <IconButton
                      icon={<Icon as={MdDelete} />}
                      aria-label="Delete"
                      onClick={() => handleDelete(user.id)}
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
              <EntryForm handleCreateEntry={handleCreateEntry} />
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
}

export default Dashboard;
