import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const signUpUser = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("User signed up successfully!");
    console.log(userCredential.user);
  } catch (error) {
    alert("Signup failed: " + error.message);
  }
};
