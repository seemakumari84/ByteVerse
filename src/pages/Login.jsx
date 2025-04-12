import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");

  const branches = [
    "Computer Science",
    "Electrical Engineering",
    "Mechanical Engineering",   
    "Civil Engineering",
    "Electronics & Communication",
    "Information Technology",
  ];

  const semesters = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Branch:", branch);
    console.log("Semester:", semester);

    // Call the prop function to set login state
    onLogin();  // 🔥 this line will make App.js render the main content
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-300">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Welcome to SmartShiksha
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          >
            <option value="">Select Branch</option>
            {branches.map((b, index) => (
              <option key={index} value={b}>
                {b}
              </option>
            ))}
          </select>

          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            required
          >
            <option value="">Select Semester</option>
            {semesters.map((s, index) => (
              <option key={index} value={s}>
                {s}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
