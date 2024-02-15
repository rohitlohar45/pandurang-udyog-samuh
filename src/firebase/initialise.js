// src/features/auth/firebase.js

import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCyP54198HYJ97b4lKKyiCh6PUsjFp17hA",
  authDomain: "pandurang-udyog-samuh.firebaseapp.com",
  projectId: "pandurang-udyog-samuh",
  storageBucket: "pandurang-udyog-samuh.appspot.com",
  messagingSenderId: "404666432894",
  appId: "1:404666432894:web:3221087e3d75732301872f"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
