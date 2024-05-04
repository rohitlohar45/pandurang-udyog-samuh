import React, { useState, useEffect } from "react";
import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Button,
	Image,
	Text,
	useToast,
} from "@chakra-ui/react";
import { firestore } from "../../firebase/initialise";
import { doc, getDoc, setDoc } from "firebase/firestore";
import heic2any from "heic2any"; // For HEIC to JPEG conversion

function TestimonialEntryForm({ handleCreateEntry, onClose, setData, id }) {
	const toast = useToast();
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		title: "",
		content: "",
		role: "",
		image: "",
	});
	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (id) {
			fetchData();
		}
	}, [id]);

	const fetchData = async () => {
		try {
			const docRef = doc(firestore, "testimonials", id);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				const data = docSnap.data();
				setFormData(data); // Load existing data if available
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleImageChange = async (e) => {
		const file = e.target.files[0]; // Get the first file only
		if (file) {
			try {
				const reader = new FileReader(); // Create a new FileReader instance

				reader.onload = () => {
					const imageUrl = reader.result; // Read the data URL
					setFormData((prevData) => ({
						...prevData,
						image: imageUrl, // Update the form data with the image
					}));
				};

				reader.readAsDataURL(file); // Read the file as a data URL
			} catch (error) {
				console.error("Error handling image change:", error);
			}
		}
	};

	const handleSubmit = async () => {
		try {
			const newData = {
				...formData,
				title: formData.title.trim(),
			};
			setIsLoading(true);

			if (id) {
				await setDoc(doc(firestore, "testimonials", id), newData); // Update existing testimonial
				setData((prevData) => {
					const index = prevData.findIndex((item) => item.id === id);
					const updatedData = [...prevData];
					updatedData[index] = newData;
					return updatedData;
				});

				toast({
					title: "Testimonial Updated Successfully",
					status: "success",
					duration: 2000,
					isClosable: true,
				});
				setIsLoading(false);
			} else {
				await handleCreateEntry(newData);
				toast({
					title: "Testimonial Created Successfully",
					status: "success",
					duration: 2000,
					isClosable: true,
				});
				setIsLoading(false);
			}

			onClose(); // Close the form
		} catch (error) {
			setIsLoading(false);
			onClose();
			toast({
				title: "An error occurred",
				description: "Please try again later",
				status: "error",
				duration: 2000,
				isClosable: true,
			});

			console.error("Error during submit:", error);
		}
	};

	return (
		<Box mt={4}>
			<FormControl isInvalid={errors.title}>
				<FormLabel>Testimonial Title</FormLabel>
				<Input
					type="text"
					placeholder="Enter title"
					name="title"
					value={formData.title}
					onChange={handleChange}
				/>
				{errors.title && <Text color="red.500">{errors.title}</Text>}
			</FormControl>

			<FormControl isInvalid={errors.content}>
				<FormLabel>Testimonial Content</FormLabel>
				<Textarea
					placeholder="Enter testimonial content"
					name="content"
					value={formData.content}
					onChange={handleChange}
				/>
				{errors.content && <Text color="red.500">{errors.content}</Text>}
			</FormControl>

			<FormControl isInvalid={errors.role}>
				<FormLabel>Role/Position</FormLabel>
				<Input
					type="text"
					placeholder="Enter role or position"
					name="role"
					value={formData.role}
					onChange={handleChange}
				/>
				{errors.role && <Text color="red.500">{errors.role}</Text>}
			</FormControl>

			<FormControl isInvalid={errors.image}>
				<FormLabel>Upload Image</FormLabel>
				<Input type="file" onChange={handleImageChange} /> {/* Single image */}
				{errors.image && <Text color="red.500">{errors.image}</Text>}
				{formData.image && (
					<Image src={formData.image} alt="Testimonial Image" boxSize="100px" mb={2} />
				)}
			</FormControl>

			<Button colorScheme="teal" onClick={handleSubmit} isLoading={isLoading}>
				Submit
			</Button>
		</Box>
	);
}

export default TestimonialEntryForm;
