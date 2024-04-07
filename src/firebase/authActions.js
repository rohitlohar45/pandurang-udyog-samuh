import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./initialise";

export const loginUser = (email, password) => async () => {
	// console.log(email, password);
	try {
		const userCredential = await signInWithEmailAndPassword(email, password);
		const user = userCredential.user;
		return user;
	} catch (error) {
		// console.log(error);
	}
};
