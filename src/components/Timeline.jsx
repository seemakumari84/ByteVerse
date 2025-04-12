// src/components/Timeline.js
import React from "react";

const Timeline = () => {
  const events = [
    { date: "8 January 2024", title: "Start of Semester", description: "The semester begins!" },
    { date: "11–22 March 2024", title: "Mid Semester Exams", description: "Time for mid-term exams!" },
    { date: "7–21 May 2024", title: "End Semester Exams", description: "Final exams to wrap up the semester!" },
  ];

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 h-full border-l-4 border-gray-300"></div>

      {/* Timeline Events */}
      <div className="space-y-10">
        {events.map((event, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className={`w-8 h-8 rounded-full bg-blue-500 text-white flex justify-center items-center`}>
              <span className="text-xl font-bold">{index + 1}</span>
            </div>
            <div className="ml-6 max-w-lg">
              <h3 className="text-xl font-semibold text-blue-600">{event.title}</h3>
              <p className="text-gray-700">{event.date}</p>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
