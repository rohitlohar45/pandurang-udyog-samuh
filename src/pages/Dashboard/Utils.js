import { collection, addDoc, doc, setDoc, deleteDoc, getFirestore } from "firebase/firestore";
import { firestore } from "../../firebase/initialise";

import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";
import { useToast } from "react-toastify";

const handleCreateEntry = async (name, description, image, service, toast) => {
	try {
		const storage = getStorage(); // Access Storage
		const db = getFirestore(); // Access Firestore
		const eventsCollectionRef = collection(db, "events");

		// Upload the image to Firebase Storage
		const imageRef = ref(storage, `images/${Date.now()}_${Math.floor(Math.random() * 1000)}`);
		await uploadString(imageRef, image, "data_url");

		// Get the download URL for the uploaded image
		const imageUrl = await getDownloadURL(imageRef);

		// Add document to Firestore collection with the obtained image URL
		const docRef = await addDoc(eventsCollectionRef, {
			name: name,
			description: description,
			imageUrl: imageUrl,
			service: service,
		});
		return docRef;
	} catch (error) {
		toast.error("Not submitted");
		console.log("Error adding entry: ", error);
	}
};

const handleEdit = async (id, name, email) => {
	try {
		const userRef = doc(firestore, "users", id);
		await setDoc(userRef, {
			name: name,
			email: email,
		});
	} catch (error) {
		console.error("Error updating entry: ", error);
	}
};

const handleDelete = async (id) => {
	try {
		await deleteDoc(doc(firestore, "users", id));
	} catch (error) {
		console.error("Error deleting entry: ", error);
	}
};

export { handleCreateEntry, handleEdit, handleDelete };
