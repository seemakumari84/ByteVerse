import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      if (isSignup) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          name,
          email: user.email,
          branch,
          semester,
          createdAt: new Date(),
        });

        console.log("User Signed Up:", user);
        setShowPopup(true);
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log("User Logged In:", user);
        onLogin(user);
      }
    } catch (error) {
      setErrorMessage(
        (isSignup ? "Signup" : "Login") + " failed: " + error.message
      );
    } finally {
      setLoading(false);
    }
  };
{/* Simple Success Popup */}
{showPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
      <h3 className="text-xl font-semibold text-green-500 mb-4">
        Successfully Signed Up!
      </h3>
      <button
        onClick={() => {
          setShowPopup(false);
          setIsSignup(false);  // Optionally, switch to login view after signup
        }}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        OK
      </button>
    </div>
  </div>
)}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-300">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          {isSignup ? "Sign Up to SmartShiksha" : "Login to SmartShiksha"}
          Welcome to SmartShiksha
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border text-black border-gray-300 rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className={`w-full p-3 border border-gray-300 rounded-lg ${
                  branch === "" ? "text-gray-500" : "text-black"
                }`}
                required
              >
                <option value="">Select your branch</option>
                <option value="CSE">Computer Science Engineering</option>
                <option value="ECE">Electronics and Communication Engineering</option>
                <option value="EEE">Electrical and Electronics Engineering</option>
                <option value="IT">Information Technology</option>
                <option value="ME">Mechanical Engineering</option>
              </select>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className={`w-full p-3 border border-gray-300 rounded-lg ${
                  semester === "" ? "text-gray-500" : "text-black"
                }`}
                required
              >
                <option value="">Select your semester</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
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
            disabled={loading}
          >
            {isSignup ? (loading ? "Signing Up..." : "Sign Up") : "Login"}
          </button>
        </form>

        {errorMessage && (
          <div className="mt-4 text-red-500 text-center">{errorMessage}</div>
        )}

        {/* Simple Success Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
              <h3 className="text-xl font-semibold text-green-500 mb-4">
                Successfully Signed Up!
              </h3>
              <button
                onClick={() => {
                  setShowPopup(false);
                  setIsSignup(false);
                }}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                OK
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-4">
          <button
            onClick={() => {
              setIsSignup(!isSignup);
              setErrorMessage("");
            }}
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
