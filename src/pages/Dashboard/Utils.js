import { collection, addDoc, doc, setDoc, deleteDoc, getFirestore } from "firebase/firestore";
import { firestore } from "../../firebase/initialise";

import { getStorage, ref, uploadString, getDownloadURL, getMetadata } from "firebase/storage";
import { useToast } from "react-toastify";

const handleCreateEntry = async (formData, toast) => {
	try {
		const storage = getStorage(); // Access Storage
		const db = getFirestore(); // Access Firestore
		const eventsCollectionRef = collection(db, "events");

		// Upload the image to Firebase Storage
		console.log(formData);
		const imageRef = ref(storage, `images/${Date.now()}_${Math.floor(Math.random() * 1000)}`);
		await uploadString(imageRef, formData.imageUrl, "data_url");

		// Get the download URL for the uploaded image
		const imageUrl = await getDownloadURL(imageRef);

		// Add document to Firestore collection with the obtained image URL
		const docRef = await addDoc(eventsCollectionRef, {
			name: formData.name,
			description: formData.description,
			imageUrl: imageUrl,
			service: formData.service,
		});
		return docRef;
	} catch (error) {
		throw error;
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
		});

		return docRef;
	} catch (error) {
		throw error;
	}
};

const handleEdit = async (id, data) => {
	try {
		console.log(data);
		const userRef = doc(firestore, "events", id);
		await setDoc(userRef, data);
		return true;
	} catch (error) {
		console.error("Error updating entry: ", error);
	}
};

const handleAwardEdit = async (id, data) => {
	try {
		console.log(data);
		const userRef = doc(firestore, "awards", id);
		await setDoc(userRef, data);
		return true;
	} catch (error) {
		console.error("Error updating entry: ", error);
	}
};

const handleDelete = async (id) => {
	try {
		await deleteDoc(doc(firestore, "events", id));
		return true;
	} catch (error) {
		console.error("Error deleting entry: ", error);
		return false;
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

export {
	handleCreateEntry,
	handleEdit,
	handleDelete,
	handleCreateAward,
	handleAwardEdit,
	handleAwardDelete,
};
