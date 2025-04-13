import React from "react";
import { Link } from "react-router-dom";
// Make sure the path is correct

const Navbar = () => (
  <nav className="bg-[#2d6a4f] dark:bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
    <h1 className="text-2xl font-semibold tracking-wide">StudyMasalaa</h1>

    <div className="flex items-center space-x-4">
      {[
        { path: "/", label: "Home" },
        { path: "/notes", label: "Notes" },
        { path: "/pyqs", label: "PYQs" },
        { path: "/labs", label: "Lab Files" },
        { path: "/courses", label: "Courses" },
        { path: "/submit", label: "Submit Notes" },
      ].map((item, idx) => (
        <Link
          key={idx}
          to={item.path}
          className="px-4 py-2 rounded-md hover:bg-[#1b4332] dark:hover:bg-gray-800 transition duration-200"
        >
          {item.label}
        </Link>
      ))}
<Link to="/quiz" className="px-4 py-2 rounded-md hover:bg-[#1b4332] transition duration-200">
  Quiz
</Link>

      {/* Theme Toggle Button */}
    
    </div>
  </nav>
);

export default Navbar;
