import { collection, addDoc, doc, setDoc, deleteDoc, getFirestore } from "firebase/firestore";
import { firestore } from "../../firebase/initialise";

import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";
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

const handleDelete = async (id) => {
	try {
		await deleteDoc(doc(firestore, "events", id));
		return true;
	} catch (error) {
		console.error("Error deleting entry: ", error);
		return false;
	}
};

export { handleCreateEntry, handleEdit, handleDelete };
