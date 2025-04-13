// src/components/Timeline.js
import React from "react";

const Timeline = () => {
  const events = [
    {
      date: "8 January 2024",
      title: "Start of Semester",
      description: "The semester officially begins.",
    },
    {
      date: "11–22 March 2024",
      title: "Mid Semester Exams",
      description: "Mid-term assessments take place.",
    },
    {
      date: "7–21 May 2024",
      title: "End Semester Exams",
      description: "Final exams conclude the semester.",
    },
  ];

  return (
    <div className="relative border-l-4 border-purple-300 pl-8">
      {events.map((event, index) => (
        <div key={index} className="mb-10 relative">
          {/* Dot */}
          <div className="absolute -left-5 top-1 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-md"></div>

          {/* Content */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-purple-700">{event.title}</h3>
            <p className="text-sm text-gray-500">{event.date}</p>
            <p className="mt-1 text-gray-700">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

