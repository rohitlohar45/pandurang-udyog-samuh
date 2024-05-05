import { collection, addDoc, doc, setDoc, deleteDoc, getFirestore } from "firebase/firestore";
import { firestore } from "../../firebase/initialise";

import { getStorage, ref, uploadString, getDownloadURL, getMetadata } from "firebase/storage";

const createSlug = (title) => {
	return title
		.toLowerCase() // Convert to lowercase
		.replace(/['’]/g, "") // Remove apostrophes (single quotes)
		.replace(/[()]/g, "") // Remove parentheses
		.replace(/[^a-z0-9]+/g, "-") // Replace all non-alphanumeric characters with hyphens
		.replace(/^-|-$/g, ""); // Trim leading and trailing hyphens
};

const handleCreateService = async (formData, toast) => {
	console.log(formData);
	try {
		const storage = getStorage(); // Access Firebase Storage
		const db = getFirestore(); // Access Firestore
		const servicesCollectionRef = collection(db, "services"); // Firestore collection reference

		// Create a reference to the folder in Firebase Storage
		const folderRef = ref(storage, `services/${formData.information.slug}`);

		// Check if the folder exists
		let folderExists = true;
		try {
			await getMetadata(folderRef);
		} catch (error) {
			if (error.code === "storage/object-not-found") {
				folderExists = false;
			} else {
				throw error;
			}
		}

		// If the folder doesn't exist, create it
		if (!folderExists) {
			await uploadString(ref(folderRef, ".keep"), ""); // Create an empty file to ensure folder creation
		}

		// Upload images to Firebase Storage and get download URLs
		const imagesPromises = formData.information.images.map(async (image) => {
			const imageName = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
			const imageRef = ref(folderRef, imageName);
			await uploadString(imageRef, image, "data_url"); // Assuming `image` is a Base64-encoded data URL
			return getDownloadURL(imageRef);
		});
		const images = await Promise.all(imagesPromises); // Await all upload operations to complete

		// Add the service document to Firestore with the obtained image URLs
		const docRef = doc(servicesCollectionRef, formData.information.slug);

		await setDoc(docRef, {
			information: {
				...formData.information,
				images: images,
			},
			support: formData.support,
		});
		return docRef;
	} catch (error) {
		// Handle errors and potentially show a notification
		toast.error("An error occurred while creating the service. Please try again.");
		throw error;
	}
};

const handleEditService = async (serviceId, formData, toast) => {
	try {
		console.log(formData);
		const storage = getStorage();
		const db = getFirestore();
		const serviceDocRef = doc(db, "services", serviceId);
		const folderRef = ref(storage, `services/${formData.information.slug}`);

		// Check and upload new images
		const imagesPromises = formData.information.images.map(async (image) => {
			if (image.startsWith("http")) {
				return image;
			} else {
				const imageName = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
				const imageRef = ref(folderRef, imageName);

				await uploadString(imageRef, image, "data_url");
				return getDownloadURL(imageRef);
			}
		});

		const uploadedImages = await Promise.all(imagesPromises); // Wait for all upload operations to complete

		// Update the service document in Firestore
		await setDoc(serviceDocRef, {
			information: {
				...formData.information, // Include other information fields
				images: uploadedImages, // Use the updated image URLs
			},
			support: formData.support, // Include support details
		});

		// Optionally, show a success toast notification
		toast({
			title: "Service updated successfully.",
			status: "success",
			duration: 2000,
			isClosable: true,
		});
	} catch (error) {
		// Handle errors and show an error notification
		console.error("Error updating service: ", error);
		toast({
			title: "An error occurred while updating the service.",
			description: "Please try again.",
			status: "error",
			duration: 2000,
			isClosable: true,
		});

		throw error;
	}
};

const handleCreateEntry = async (formData, toast) => {
	try {
		const storage = getStorage(); // Access Storage
		const db = getFirestore(); // Access Firestore
		const eventsCollectionRef = collection(db, "events");

		// Upload the image to Firebase Storage
		// console.log(formData);
		const folderRef = ref(storage, `awards/${formData.slug}`);

		// Check if the folder exists
		let folderExists = true;
		try {
			await getMetadata(folderRef);
		} catch (error) {
			if (error.code === "storage/object-not-found") {
				folderExists = false;
			} else {
				throw error;
			}
		}

		// If the folder doesn't exist, create it
		if (!folderExists) {
			await uploadString(ref(folderRef, ".keep"), "");
		}

		// Upload images to Firebase Storage and get download URLs
		const imagesPromises = formData.information.images.map(async (image) => {
			const imageName = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
			const imageRef = ref(folderRef, imageName);
			await uploadString(imageRef, image, "data_url");
			return getDownloadURL(imageRef);
		});
		const images = await Promise.all(imagesPromises);
		const docRef = await addDoc(eventsCollectionRef, {
			title: formData.title,
			slug: formData.slug,
			information: {
				description: formData.information.description,
				images: images,
			},
			rank: formData.rank,
		});
		return docRef;
	} catch (error) {
		throw error;
	}
};
const handleEdit = async (id, data) => {
	try {
		// console.log(data);
		const userRef = doc(firestore, "events", id);
		await setDoc(userRef, data);
		return true;
	} catch (error) {
		console.error("Error updating entry: ", error);
	}
};
const handleDelete = async (id) => {
	console.log(id);
	try {
		await deleteDoc(doc(firestore, "events", id));
		return true;
	} catch (error) {
		console.error("Error deleting entry: ", error);
		return false;
	}
};

const handleCreateAward = async (formData, toast) => {
	try {
		const storage = getStorage(); // Access Storage
		const db = getFirestore(); // Access Firestore
		const eventsCollectionRef = collection(db, "awards");

		// Create a reference to the folder in Firebase Storage
		const folderRef = ref(storage, `awards/${formData.slug}`);

		// Check if the folder exists
		let folderExists = true;
		try {
			await getMetadata(folderRef);
		} catch (error) {
			if (error.code === "storage/object-not-found") {
				folderExists = false;
			} else {
				throw error;
			}
		}

		// If the folder doesn't exist, create it
		if (!folderExists) {
			await uploadString(ref(folderRef, ".keep"), "");
		}

		// Upload images to Firebase Storage and get download URLs
		const imagesPromises = formData.information.images.map(async (image) => {
			const imageName = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
			const imageRef = ref(folderRef, imageName);
			await uploadString(imageRef, image, "data_url");
			return getDownloadURL(imageRef);
		});
		const images = await Promise.all(imagesPromises);

		// Add document to Firestore collection with the obtained image URLs
		const docRef = await addDoc(eventsCollectionRef, {
			title: formData.title,
			slug: formData.slug,
			information: {
				description: formData.information.description,
				images: images,
			},
			rank: formData.rank,
		});

		return docRef;
	} catch (error) {
		throw error;
	}
};

const handleAwardEdit = async (id, data) => {
	try {
		// console.log(data);
		const userRef = doc(firestore, "awards", id);
		await setDoc(userRef, data);
		return true;
	} catch (error) {
		console.error("Error updating entry: ", error);
	}
};
const handleAwardDelete = async (id) => {
	try {
		await deleteDoc(doc(firestore, "awards", id));
		// delete folder from storage
		const storage = getStorage();
		const folderRef = ref(storage, `awards/${id}`);
		await deleteDoc(folderRef);

		return true;
	} catch (error) {
		console.error("Error deleting entry: ", error);
		return false;
	}
};

const handleUploadImage = async (folderRef, image) => {
	const imageName = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
	const imageRef = ref(folderRef, imageName);

	await uploadString(imageRef, image, "data_url");
	return await getDownloadURL(imageRef);
};

const handleCreateTestimonial = async (formData, toast) => {
	try {
		const storage = getStorage(); // Access Firebase Storage
		const db = getFirestore(); // Access Firestore
		const testimonialsCollectionRef = collection(db, "testimonials"); // Firestore collection reference

		const folderRef = ref(storage, `testimonials/${formData.title}`); // Reference to the testimonial's storage folder

		// Check if the folder exists in Firebase Storage
		let folderExists = true;
		try {
			await getMetadata(folderRef); // Try to fetch metadata
		} catch (error) {
			if (error.code === "storage/object-not-found") {
				folderExists = false; // Folder doesn't exist
			} else {
				throw error; // Handle other errors
			}
		}

		// Create the folder if it doesn't exist
		if (!folderExists) {
			await uploadString(ref(folderRef, ".keep"), ""); // Create a dummy file to ensure the folder exists
		}

		// If there's an image, upload it and get the download URL
		let imageDownloadUrl = null;
		if (formData.image) {
			imageDownloadUrl = await handleUploadImage(folderRef, formData.image); // Upload the image
		}

		const docRef = await addDoc(testimonialsCollectionRef, {
			title: formData.title,
			content: formData.content,
			role: formData.role,
			image: imageDownloadUrl, // Store the image download URL
		});

		return docRef;
	} catch (error) {
		console.error("Error creating testimonial:", error);
		throw error;
	}
};

const handleEditTestimonial = async (id, data, toast) => {
	try {
		const testimonialRef = doc(getFirestore(), "testimonials", id); // Reference to the testimonial document
		await setDoc(testimonialRef, data); // Update the document in Firestore
		return true; // Indicate success
	} catch (error) {
		console.error("Error updating testimonial:", error);
		throw error;
	}
};

const handleDeleteTestimonial = async (id, toast) => {
	try {
		const testimonialRef = doc(getFirestore(), "testimonials", id);
		await deleteDoc(testimonialRef);
		toast({
			title: "Testimonial deleted successfully.",
			status: "success",
			duration: 2000,
			isClosable: true,
		});
		return true;
	} catch (error) {
		console.error("Error deleting testimonial:", error);
		return false; // Indicate failure
	}
};

export {
	handleCreateEntry,
	handleEdit,
	handleDelete,
	handleCreateAward,
	handleAwardEdit,
	handleAwardDelete,
	handleCreateService,
	handleEditService,
	createSlug,
	handleCreateTestimonial,
	handleEditTestimonial,
	handleDeleteTestimonial,
};
