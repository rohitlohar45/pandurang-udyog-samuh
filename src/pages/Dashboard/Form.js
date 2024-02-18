import React, { useState } from "react";
import {
	Box,
	Input,
	Button,
	FormControl,
	FormLabel,
	Image,
	Text,
	useToast,
	Select,
} from "@chakra-ui/react";
import servicePages from "../../utils/services";

function EntryForm({ handleCreateEntry, onClose, setData }) {
	const toast = useToast({
		position: "top",
	});
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState(null);
	const [selectedService, setSelectedService] = useState("");
	const [errors, setErrors] = useState({});

	const handleSubmit = async () => {
		const errors = {};
		let isValid = true;

		if (!name.trim()) {
			errors.name = "Name is required";
			isValid = false;
		}

		if (!description.trim()) {
			errors.description = "Description is required";
			isValid = false;
		}

		if (!image) {
			errors.image = "Image is required";
			isValid = false;
		}

		if (!selectedService) {
			errors.service = "Please select a service";
			isValid = false;
		}

		if (isValid) {
			const res = await handleCreateEntry(name, description, image, selectedService, toast);

			if (res) {
				let data = {
					name: name,
					description: description,
					imageUrl: image,
					service: selectedService,
				};
				setData((prevData) => [...prevData, data]);
				onClose();
			}

			toast({
				title: "Event Added Successfully",
				status: "success",
				duration: 9000,
				isClosable: true,
				containerStyle: {
					marginTop: "40px",
					width: "400px",
				},
			});
			// Optionally, you can reset the form fields here
			setName("");
			setDescription("");
			setImage(null);
			setSelectedService("");
			setErrors({});
		} else {
			setErrors(errors);
		}
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<Box mt={4}>
			<FormControl isInvalid={errors.name}>
				<FormLabel>Name</FormLabel>
				<Input
					type="text"
					placeholder="Enter name"
					mb={2}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				{errors.name && <Text color="red.500">{errors.name}</Text>}
			</FormControl>
			<FormControl isInvalid={errors.description}>
				<FormLabel>Description</FormLabel>
				<Input
					type="text"
					placeholder="Enter description"
					mb={2}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				{errors.description && <Text color="red.500">{errors.description}</Text>}
			</FormControl>
			<FormControl isInvalid={errors.image}>
				<FormLabel>Image</FormLabel>
				<Input type="file" accept="image/*" mb={2} onChange={handleImageChange} />
				{errors.image && <Text color="red.500">{errors.image}</Text>}
				{image && <Image src={image} alt="Preview" boxSize="100px" />}{" "}
			</FormControl>
			<FormControl isInvalid={errors.service}>
				<FormLabel>Service</FormLabel>
				<Select
					placeholder="Select service"
					value={selectedService}
					onChange={(e) => setSelectedService(e.target.value)}
				>
					{servicePages.map((page, index) => (
						<option key={index} value={page.slug}>
							{page.name}
						</option>
					))}
				</Select>
				{errors.service && <Text color="red.500">{errors.service}</Text>}
			</FormControl>
			<Button colorScheme="teal" onClick={handleSubmit}>
				Submit
			</Button>
		</Box>
	);
}

export default EntryForm;
