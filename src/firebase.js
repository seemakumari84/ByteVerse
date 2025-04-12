import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApTBioKA1AJgVCUJviyL4W9uy7sOd_F6Q",
  authDomain: "smartshiksha-nitp81.firebaseapp.com",
  projectId: "smartshiksha-nitp81",
  storageBucket: "smartshiksha-nitp81.firebasestorage.app",
  messagingSenderId: "623502405722",
  appId: "1:623502405722:web:06530e5bc0744bf3c9a863",
  measurementId: "G-GBDNJ61HZL"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
