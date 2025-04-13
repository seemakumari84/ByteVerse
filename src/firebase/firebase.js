import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCr0UhA_7M2GdjeP-D2xxqERClmnISP-n8",
  authDomain: "smartshiksha-nitp081.firebaseapp.com",
  projectId: "smartshiksha-nitp081",
  storageBucket: "smartshiksha-nitp081.firebasestorage.app",
  messagingSenderId: "400008026803",
  appId: "1:400008026803:web:b734585b70cf8efc76eec6",
  measurementId: "G-5FDR9DY7ZZ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };
