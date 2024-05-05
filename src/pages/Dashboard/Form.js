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
import { firestore } from "../../firebase/initialise";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAppContext } from "../../context/AppContext";
import heic2any from "heic2any"; // Import heic2any for HEIC to JPG conversion

function EntryForm({ handleCreateEntry, onClose, setData, id }) {
	const toast = useToast();
	const [formData, setFormData] = useState({
		id: "",
		rank: 0,
		slug: "",
		title: "",
		information: {
			description: "",
			images: [],
		},
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (id) {
			fetchData();
		}
		// console.log("id", id);
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

	const handleImageChange = async (e) => {
		// console.log(e.target.files);
		const files = Array.from(e.target.files);
		const updatedImagesArray = [];

		// console.log("files", files);

		try {
			for (const file of files) {
				let ext = file.name.split(".").pop();
				if (ext === "HEIC") {
					// Convert HEIC to JPEG
					const reader = new FileReader();
					reader.onload = async () => {
						const arrayBuffer = reader.result;
						const convertedImage = await convertHeicToJpg(arrayBuffer);
						updatedImagesArray.push(convertedImage);
						if (updatedImagesArray.length === files.length) {
							// Set the state after all images are processed
							setFormData((prevData) => ({
								...prevData,
								information: {
									...prevData.information,
									images: [...prevData.information.images, ...updatedImagesArray],
								},
							}));
						}
					};
					reader.readAsArrayBuffer(file);
				} else {
					// For other image formats (not HEIC), add the image directly to the array
					const reader = new FileReader();
					reader.onloadend = () => {
						updatedImagesArray.push(reader.result);
						if (updatedImagesArray.length === files.length) {
							// Set the state after all images are processed
							setFormData((prevData) => ({
								...prevData,
								information: {
									...prevData.information,
									images: [...prevData.information.images, ...updatedImagesArray],
								},
							}));
						}
					};
					reader.readAsDataURL(file);
				}
			}
		} catch (error) {
			console.error("Error handling image change:", error);
		}
	};

	const convertHeicToJpg = async (file) => {
		const buffer = await file.arrayBuffer();
		const jpgBlob = await heic2any({ blob: buffer, toType: "image/jpeg" });
		return URL.createObjectURL(jpgBlob);
	};

	const handleSubmit = async () => {
		try {
			setIsSubmitting(true);
			const newData = {
				...formData,
				rank: formData.rank || 0,
				slug: formData.title.toLowerCase().replace(/\s+/g, "-"),
			};

			if (id) {
				await setDoc(doc(firestore, "events", id), newData);
				setData((prevData) => {
					const index = prevData.findIndex((item) => item.id === id);
					const updatedData = [...prevData];
					updatedData[index] = newData;
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
				await handleCreateEntry(newData);
				toast({
					title: "Event Created Successfully",
					status: "success",
					duration: 2000,
					isClosable: true,
					containerStyle: {
						marginTop: "40px",
						width: "400px",
					},
				});
			}
		} catch (error) {
			console.error("Error:", error);
		} finally {
			setIsSubmitting(false);
			onClose();
		}
	};

	return (
		<Box mt={4}>
			<FormControl isInvalid={errors.title}>
				<FormLabel>Title</FormLabel>
				<Input
					type="text"
					placeholder="Enter title"
					mb={2}
					name="title"
					value={formData.title}
					onChange={handleChange}
				/>
				{errors.title && <Text color="red.500">{errors.title}</Text>}
			</FormControl>
			<FormControl isInvalid={errors.information && errors.information.description}>
				<FormLabel>Description</FormLabel>
				<Input
					type="text"
					placeholder="Enter description"
					mb={2}
					name="description"
					value={formData.information.description}
					onChange={(e) =>
						handleChange({
							target: {
								name: "information",
								value: { ...formData.information, description: e.target.value },
							},
						})
					}
				/>
				{errors.information && errors.information.description && (
					<Text color="red.500">{errors.information.description}</Text>
				)}
			</FormControl>
			<FormControl isInvalid={errors.information && errors.information.images}>
				<FormLabel>Images</FormLabel>
				<Input type="file" mb={2} onChange={handleImageChange} multiple />
				{errors.information && errors.information.images && (
					<Text color="red.500">{errors.information.images}</Text>
				)}
				{formData.information.images &&
					formData.information.images.map((imageUrl, index) => (
						<Image key={index} src={imageUrl} alt={`Image ${index + 1}`} boxSize="100px" mb={2} />
					))}
			</FormControl>
			<Button colorScheme="teal" onClick={handleSubmit}>
				Submit
			</Button>
		</Box>
	);
}

export default EntryForm;
