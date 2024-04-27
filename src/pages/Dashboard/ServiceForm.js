import React, { useState, useEffect } from "react";
import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Button,
	Image,
	Text,
	useToast,
	Grid,
	GridItem,
	Flex,
	IconButton,
	Textarea,
} from "@chakra-ui/react";
import { firestore } from "../../firebase/initialise";
import { doc, getDoc, setDoc } from "firebase/firestore";
import heic2any from "heic2any"; // For HEIC to JPEG conversion
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { handleEditService } from "./Utils";

function ServiceEntryForm({ handleCreateEntry, onClose, setFilteredData, serviceId }) {
	const toast = useToast();
	const [formData, setFormData] = useState({
		support: {
			email: "",
			phoneNumber: "",
		},
		information: {
			title: "",
			description1: "",
			description2: "",
			description3: "",
			description4: "",
			description: "",
			images: [],
		},
	});

	const [errors, setErrors] = useState({});
	const [newYouTubeLink, setNewYouTubeLink] = useState("");
	const [youtubeLink, setYoutubeLink] = useState(""); // State for YouTube video links
	const [allYouTubeLinks, setAllYouTubeLinks] = useState([]);
	const [images, setImages] = useState([]); // State for images
	const [isSubmitting, setIsSubmitting] = useState(false);
	useEffect(() => {
		if (serviceId) {
			fetchData(); // Fetch data when editing
		}
	}, [serviceId]);

	const fetchData = async () => {
		try {
			const docRef = doc(firestore, "services", serviceId);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				const data = docSnap.data();
				setFormData(data);
			}
		} catch (error) {
			console.error("Error fetching service data:", error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "title") {
			setFormData((prevData) => ({
				...prevData,
				information: {
					...prevData.information,
					title: value,
				},
			}));
		} else if (name === "description1") {
			setFormData((prevData) => ({
				...prevData,
				information: {
					...prevData.information,
					description1: value,
				},
			}));
		} else if (name === "description2") {
			setFormData((prevData) => ({
				...prevData,
				information: {
					...prevData.information,
					description2: value,
				},
			}));
		} else if (name === "description3") {
			setFormData((prevData) => ({
				...prevData,
				information: {
					...prevData.information,
					description3: value,
				},
			}));
		} else if (name === "description4") {
			setFormData((prevData) => ({
				...prevData,
				information: {
					...prevData.information,
					description4: value,
				},
			}));
		} else if (name === "email") {
			setFormData((prevData) => ({
				...prevData,
				support: {
					...prevData.support,
					email: value,
				},
			}));
		} else if (name === "phoneNumber") {
			setFormData((prevData) => ({
				...prevData,
				support: {
					...prevData.support,
					phoneNumber: value,
				},
			}));
		}
	};

	useEffect(() => {
		const links = formData.information.images.filter(
			(image) => image.includes("youtube") || image.includes("youtu.be")
		);
		setAllYouTubeLinks(links);
		setImages(
			formData.information.images.filter(
				(image) => !image.includes("youtube") && !image.includes("youtu.be")
			)
		);
	}, [formData]);

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleAddYouTubeLink(); // Add the link when pressing Enter
		}
	};

	const handleImageChange = async (e) => {
		const files = Array.from(e.target.files);
		const updatedImagesArray = [];

		try {
			for (const file of files) {
				const ext = file.name.split(".").pop();
				const reader = new FileReader();

				if (ext === "HEIC") {
					reader.onload = async () => {
						const arrayBuffer = reader.result;
						const convertedImage = await convertHeicToJpg(arrayBuffer);
						updatedImagesArray.push(convertedImage);
						updateFormImages(updatedImagesArray, files?.length);
					};
					reader.readAsArrayBuffer(file);
				} else {
					reader.onloadend = () => {
						updatedImagesArray.push(reader.result);
						updateFormImages(updatedImagesArray, files?.length);
					};
					reader.readAsDataURL(file);
				}
			}
		} catch (error) {
			console.error("Error handling image change:", error);
		}
	};

	const handleAddYouTubeLink = () => {
		// check if the link is a valid youtube link
		if (!newYouTubeLink.includes("youtube") && !newYouTubeLink.includes("youtu.be")) {
			setErrors((prevErrors) => ({
				...prevErrors,
				youtubeLink: "Please enter a valid YouTube link",
			}));
			return;
		}
		const trimmedLink = newYouTubeLink.trim();
		if (trimmedLink) {
			setAllYouTubeLinks((prevLinks) => [...prevLinks, trimmedLink]);
			setNewYouTubeLink("");
			setErrors((prevErrors) => ({ ...prevErrors, youtubeLink: "" }));
		}
	};

	const handleRemoveYouTubeLink = (index) => {
		const updatedLinks = allYouTubeLinks.filter((link, i) => i !== index);
		setAllYouTubeLinks(updatedLinks);
	};

	const updateFormImages = (updatedImagesArray, totalFiles) => {
		if (updatedImagesArray?.length === totalFiles) {
			setFormData((prevData) => ({
				...prevData,
				information: {
					...prevData.information,
					images: [...prevData.information.images, ...updatedImagesArray],
				},
			}));
		}
	};

	const convertHeicToJpg = async (arrayBuffer) => {
		const jpgBlob = await heic2any({ blob: new Blob([arrayBuffer]), toType: "image/jpeg" });
		return URL.createObjectURL(jpgBlob);
	};

	const handleSubmit = async () => {
		try {
			setIsSubmitting(true);
			const newSlug = formData.information.title.toLowerCase().replace(/\s+/g, "-");
			const newData = {
				...formData,
				slug: newSlug,
				information: {
					...formData.information,
					images: [...images, ...allYouTubeLinks],
				},
			};
			if (serviceId) {
				await handleEditService(serviceId, newData, toast);
			} else {
				await handleCreateEntry(newData);
				toast({
					title: "Service Created Successfully",
					status: "success",
					duration: 2000,
					isClosable: true,
				});
			}

			onClose();
			setIsSubmitting(false);
		} catch (error) {
			console.error("Error:", error);
			setIsSubmitting(false);
			toast({
				title: "Error Creating or Updating Service",
				description: "An error occurred while creating or updating the service.",
				status: "error",
				duration: 2000,
				isClosable: true,
			});
		}
	};

	const handleRemoveImage = (index) => {
		console.log(index);
		console.log(formData.information.images.length);
		const updatedImages = images.filter((_, i) => i !== index);
		setImages(updatedImages);
	};

	return (
		<Box mt={4}>
			<FormControl mb={4} isInvalid={errors.title}>
				<FormLabel>Service Title</FormLabel>
				<Input
					type="text"
					placeholder="Enter title"
					name="title"
					value={formData.information.title}
					onChange={handleChange}
				/>
				{errors.title && <Text color="red.500">{errors.title}</Text>}
			</FormControl>

			<FormControl mb={4}>
				<FormLabel>Description 1</FormLabel>
				<Textarea
					size={"lg"}
					type="text"
					placeholder="Enter description"
					name="description1"
					value={formData.information.description1}
					onChange={handleChange}
				/>
			</FormControl>

			<FormControl mb={4}>
				<FormLabel>Description 2</FormLabel>
				<Textarea
					size={"lg"}
					type="text"
					placeholder="Enter description"
					name="description2"
					value={formData.information.description2}
					onChange={handleChange}
				/>
			</FormControl>

			<FormControl mb={4}>
				<FormLabel>Description 3</FormLabel>
				<Textarea
					size={"lg"}
					type="text"
					placeholder="Enter description"
					name="description3"
					value={formData.information.description3}
					onChange={handleChange}
				/>
			</FormControl>

			<FormControl mb={4}>
				<FormLabel>Description 4</FormLabel>
				<Textarea
					size={"lg"}
					type="text"
					placeholder="Enter description"
					name="description4"
					value={formData.information.description4}
					onChange={handleChange}
				/>
			</FormControl>

			<FormControl mb={4}>
				<FormLabel>Support Email</FormLabel>
				<Input
					type="email"
					placeholder="Enter support email"
					name="email"
					value={formData.support.email}
					onChange={(e) =>
						setFormData((prevData) => ({
							...prevData,
							support: { ...prevData.support, email: e.target.value },
						}))
					}
				/>
			</FormControl>

			<FormControl mb={4}>
				<FormLabel>Support Phone Number</FormLabel>
				<Input
					type="text"
					placeholder="Enter phone number"
					name="phoneNumber"
					value={formData.support.phoneNumber}
					onChange={(e) =>
						setFormData((prevData) => ({
							...prevData,
							support: { ...prevData.support, phoneNumber: e.target.value },
						}))
					}
				/>
			</FormControl>

			<FormControl mb={4}>
				<FormLabel>Images</FormLabel>
				<Input type="file" multiple onChange={handleImageChange} accept="image/*" />
				<Grid templateColumns="repeat(4, 1fr)" gap={6}>
					{images.map((image, index) => (
						<GridItem key={index} position="relative">
							<Image
								src={image}
								alt={`Image ${index + 1}`}
								boxSize="100px"
								objectFit="cover"
								borderRadius="md"
							/>
							<Box position="absolute" top="5px" right="0px">
								<IconButton
									icon={<CloseIcon />}
									colorScheme="red"
									size="sm"
									onClick={() => handleRemoveImage(index)} // Call handler to remove image
								/>
							</Box>
						</GridItem>
					))}
				</Grid>
			</FormControl>

			<FormControl mb={4}>
				<FormLabel>YouTube Video Links</FormLabel>
				<Flex>
					<Input
						type="text"
						placeholder="Add YouTube link"
						value={newYouTubeLink}
						onChange={(e) => setNewYouTubeLink(e.target.value)}
						onKeyPress={handleKeyPress}
					/>
					<IconButton icon={<AddIcon />} colorScheme="teal" onClick={handleAddYouTubeLink} />
				</Flex>
				{errors.youtubeLink && <Text color="red.500">{errors.youtubeLink}</Text>}
				{allYouTubeLinks?.length > 0 && (
					<Box mt={4}>
						{allYouTubeLinks.map((link, index) => (
							<Flex key={index} alignItems="center">
								<Text as="p">{link}</Text>
								<IconButton
									icon={<CloseIcon />}
									size="sm"
									colorScheme="red"
									ml={2}
									onClick={() => handleRemoveYouTubeLink(index)} // Remove link
								/>
							</Flex>
						))}
					</Box>
				)}
			</FormControl>

			<Flex justifyContent="flex-end" mt={4}>
				<Button colorScheme="teal" isLoading={isSubmitting} disabled={isSubmitting}>
					Submit
				</Button>
			</Flex>
		</Box>
	);
}

export default ServiceEntryForm;
