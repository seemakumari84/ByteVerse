import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // For Sign Up
  const [branch, setBranch] = useState(""); // For Sign Up
  const [semester, setSemester] = useState(""); // For Sign Up
  const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      // Handle Sign Up
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user data to Firestore (Optional)
        await setDoc(doc(db, "users", user.uid), {
          name: name,
          email: user.email,
          branch: branch,
          semester: semester,
          createdAt: new Date(),
        });

        console.log("User Signed Up:", user);
        onLogin(user); // Trigger parent login action

      } catch (error) {
        alert("Signup failed: " + error.message);
      }
    } else {
      // Handle Login
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User Logged In:", user);
        onLogin(user); // Trigger parent login action
      } catch (error) {
        alert("Login failed: " + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-300">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          {isSignup ? "Sign Up to SmartShiksha" : "Login to SmartShiksha"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              >
                <option value="" className="w-full p-3 border border-gray-300 rounded-lg">Select your branch</option>
                <option value="CSE">Computer Science Engineering</option>
                <option value="ECE">Electronics and Communication Engineering</option>
                <option value="EEE">Electrical and Electronics Engineering</option>
                <option value="IT">Information Technology</option>
                <option value="ME">Mechanical Engineering</option>
                {/* Add other branches if needed */}
              </select>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              >
                <option value="" >Select your semester</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </>
          )}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border text-black border-gray-300 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-500 hover:underline"
          >
            {isSignup ? (
              <span>Already have an account? <u>Login</u></span>
            ) : (
              <span>Don't have an account? <u>Sign Up</u></span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
