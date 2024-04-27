import React, { useEffect, useState } from "react";
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
import { firestore } from "../../firebase/initialise";
import { doc, getDoc, setDoc } from "firebase/firestore";

function EntryForm({ handleCreateEntry, onClose, setData, id }) {
	const toast = useToast({
		position: "top",
	});
	const [formData, setFormData] = useState({
		name: "",
		description: "",
		imageUrl: "",
		service: "",
	});
	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (id) {
			fetchData();
		}
	}, [id]);

	const fetchData = async () => {
		try {
			const docRef = doc(firestore, "events", id);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				const data = docSnap.data();
				setFormData(data);
			} else {
				// console.log("No such document!");
			}
		} catch (error) {
			console.error("Error fetching data: ", error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setFormData((prevData) => ({
					...prevData,
					imageUrl: reader.result,
				}));
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = async () => {
		const validationErrors = {};
		let isValid = true;

		for (const key in formData) {
			if (!formData[key]) {
				validationErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
				isValid = false;
			}
		}

		if (isValid) {
			try {
				if (id) {
					await setDoc(doc(firestore, "events", id), formData);
					setData((prevData) => {
						const index = prevData.findIndex((item) => item.id === id);
						const updatedData = [...prevData];
						updatedData[index] = formData;
						return updatedData;
					});
					toast({
						title: "Event Updated Successfully",
						status: "success",
						duration: 2000,
						isClosable: true,
						containerStyle: {
							marginTop: "40px",
							width: "400px",
						},
					});
				} else {
					try {
						// console.log(formData);
						await handleCreateEntry(formData, toast);
						setData((prevData) => [...prevData, formData]);
						toast({
							title: "Event Added Successfully",
							status: "success",
							duration: 2000,
							isClosable: true,
							containerStyle: {
								marginTop: "40px",
								width: "400px",
							},
						});
						onClose();
					} catch (e) {
						// console.log(e);
					}
				}
			} catch (error) {
				console.error("Error:", error);
			}
		} else {
			setErrors(validationErrors);
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
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>
				{errors.name && <Text color="red.500">{errors.name}</Text>}
			</FormControl>
			<FormControl isInvalid={errors.description}>
				<FormLabel>Description</FormLabel>
				<Input
					type="text"
					placeholder="Enter description"
					mb={2}
					name="description"
					value={formData.description}
					onChange={handleChange}
				/>
				{errors.description && <Text color="red.500">{errors.description}</Text>}
			</FormControl>
			<FormControl isInvalid={errors.imageUrl}>
				<FormLabel>Image</FormLabel>
				<Input type="file" accept="image/*" mb={2} onChange={handleImageChange} />
				{errors.imageUrl && <Text color="red.500">{errors.imageUrl}</Text>}
				{formData.imageUrl && <Image src={formData.imageUrl} alt="Preview" boxSize="100px" />}
			</FormControl>
			<FormControl isInvalid={errors.service}>
				<FormLabel>Service</FormLabel>
				<Select
					placeholder="Select service"
					value={formData.service}
					onChange={(e) => handleChange({ target: { name: "service", value: e.target.value } })}
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
