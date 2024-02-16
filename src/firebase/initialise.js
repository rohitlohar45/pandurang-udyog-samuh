// src/features/auth/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCyP54198HYJ97b4lKKyiCh6PUsjFp17hA",
	authDomain: "pandurang-udyog-samuh.firebaseapp.com",
	projectId: "pandurang-udyog-samuh",
	storageBucket: "pandurang-udyog-samuh.appspot.com",
	messagingSenderId: "404666432894",
	appId: "1:404666432894:web:3221087e3d75732301872f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const firestore = getFirestore(firebaseApp);
export default firebaseApp;
