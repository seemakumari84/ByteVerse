import React from "react";
const courseData = [
  // Original Courses
  {
    title: "DSA with Love Babbar",
    description: "Comprehensive playlist for Data Structures and Algorithms.",
    link: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTr54_TH-Nz3D7vM75R-SgXc",
    image: "https://img.youtube.com/vi/B31LgI4Y4DQ/hqdefault.jpg",
  },
  {
    title: "Web Dev Full Course",
    description: "Frontend + Backend + Deployment using MERN stack.",
    link: "https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd",
    image: "https://img.youtube.com/vi/Vi9bxu-M-ag/hqdefault.jpg",
  },
  {
    title: "Operating System by Gate Smashers",
    description: "Understand OS concepts in simple language.",
    link: "https://www.youtube.com/playlist?list=PL8p2I9GklV464dP8n3j1nO6RhRZxkQK2P",
    image: "https://img.youtube.com/vi/_TpOHMCODXo/hqdefault.jpg",
  },
  {
    title: "DBMS by CodeWithHarry",
    description: "Relational Databases, SQL, ER Models and more.",
    link: "https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd",
    image: "https://img.youtube.com/vi/HXV3zeQKqGY/hqdefault.jpg",
  },

  // Electrical
  {
    title: "Electrical Machines by NPTEL",
    description: "Deep dive into transformers, motors, and generators.",
    link: "https://www.youtube.com/playlist?list=PLLy_2iUCG87CV5uSyo3UKQ1xX1fI3MmG7",
    image: "https://i.ytimg.com/vi/StzVQMbNM5Q/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC6AKKAgwIABABGGUgZShlMA8=&rs=AOn4CLCkmABU3DB99GeJqj3KLXH0EHWQkQ",
  },
  {
    title: "Power Systems - GATE Academy",
    description: "Detailed lessons on transmission, distribution, and fault analysis.",
    link: "https://www.youtube.com/playlist?list=PLVLoWQFkZbhU3w3vDcJJekIbrwSXzvmGY",
    image: "https://i.ytimg.com/vi/oor61soh0hk/maxresdefault.jpg",
  },

  // Mechanical
  {
    title: "Thermodynamics for Mechanical Engineers",
    description: "Covers laws of thermodynamics, cycles, and applications.",
    link: "https://www.youtube.com/playlist?list=PLrjkTql3jnm9t1iDUmBT1x3PMoeGfWMZ1",
    image: "https://i.ytimg.com/vi/DPz0LQbNL_c/maxresdefault.jpg",
  },
  {
    title: "Engineering Mechanics by NPTEL",
    description: "Statics, dynamics, kinematics, and real-world mechanical systems.",
    link: "https://www.youtube.com/playlist?list=PL3DC64AFEA1E5E6E2",
    image: "https://i.ytimg.com/vi/Ljyltb-xTXE/maxresdefault.jpg",
  },

  // Electronics
  {
    title: "Digital Electronics - Unacademy GATE",
    description: "Covers logic gates, flip-flops, counters, and more.",
    link: "https://www.youtube.com/playlist?list=PL9RcWoqXmzaIAZkJ5zRNu7JwciN3Wfsyj",
    image: "https://i.ytimg.com/vi/em869c3Xnp8/maxresdefault_live.jpg",
  },
  {
    title: "Analog Circuits - Gate Academy",
    description: "Op-Amps, diodes, BJT & FET-based circuit analysis.",
    link: "https://www.youtube.com/playlist?list=PLVLoWQFkZbhXfr8uB8scLi5Z7_OeMOA7v",
    image: "https://i.ytimg.com/vi/IUD7gn0w7GU/maxresdefault.jpg",
  },

  // Robotics
  {
    title: "Robotics - Basics to Advanced (Coursera)",
    description: "Introduction to robotics including kinematics & control.",
    link: "https://www.youtube.com/playlist?list=PLn1Yj9qrLYbVsFfC4IGV9v63A_UZ4X03l",
    image: "https://i.ytimg.com/vi/CoCyOJ1ucng/maxresdefault.jpg",
  },
  {
    title: "ROS (Robot Operating System) Crash Course",
    description: "Build real robotic software systems using ROS.",
    link: "https://www.youtube.com/playlist?list=PLn1Yj9qrLYbW8U_r9F9msFtF_TFZF5fbW",
    image: "https://i.ytimg.com/vi/N6K2LWG2kRI/maxresdefault.jpg",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10 text-center">
          📚 Recommended Courses
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courseData.map((course, index) => (
            <a
              key={index}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 border border-gray-200"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  {course.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
