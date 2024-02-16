import { collection, addDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../../firebase/initialise";

const handleCreateEntry = async (name, email) => {
	try {
		const docRef = await addDoc(collection(firestore, "users"), {
			name: name,
			email: email,
		});
	} catch (error) {
		console.error("Error adding entry: ", error);
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
