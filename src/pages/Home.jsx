import React from "react";
import AnimatedPage from "../components/Animate";
import Timeline from "../components/Timeline"; 
const Home = () => {
  return (
    <AnimatedPage>
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 py-10 md:px-20 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-3 drop-shadow-sm">
          Welcome to <span className="text-purple-600">StudyMasalaa</span> 🚀
        </h1>
        <p className="text-xl text-gray-600 font-medium">
          Breaking Barriers, Building CGPA
        </p>
      </header>

      {/* Class Contents */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">📚 Class Contents</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Class Notes (8 Jan – Today)</li>
          <li>Lab Files (8 Jan – Today)</li>
          <li>Assignments (8 Jan – Today)</li>
          <li>PYQs</li>
          <li>Question Practice Sets</li>
        </ul>
      </section>

      {/* Important Dates */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">📅 Important Dates</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Start of Semester: 8 January 2024</li>
          <li>Mid Semester Exams: 11–22 March 2024</li>
          <li>End Semester Exams: 7–21 May 2024</li>
        </ul>
      </section>

  {/* Subjects */}
<section className="bg-white rounded-xl shadow-md p-6 mb-10">
  <h2 className="text-2xl font-semibold text-purple-700 mb-4">📘 Subjects Covered</h2>
  <ul className="list-disc pl-6 text-gray-700 space-y-2">
    <li>
      <a href="https://www.youtube.com/watch?v=BQ5JYL0BFtk&list=PLxlldU21bDqMaZghkk1OxO62MKSHkzPU7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        Electromagnetic Field Theory
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=jte2S2iWRMI&list=PLBlnK6fEyqRgyFCCgqdcBowmSp_BTKs4F" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        Microprocessor & Microcontroller
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=cIH5o7wYNzs&list=PLXOYj6DUOGrpVb7_cCB1pZuGH4BFlp61B" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        Digital Signal Processing
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=mlIUKyZIUUU" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        Object Oriented Programming
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=S-NKq89bNkk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        Seminar and Report Writing
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/playlist?list=PLvfKBrFuxD065AT7q1Z0rDAj9kBnPnL0l" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        Optimization Techniques
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=BBvG7uzmOV0" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        Wireless Sensor Network
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=g6CCJAbdkK8&list=PLHO2NKv71TvsSqYwVvUCZwNkY-jUyUHdS" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        Digital IC Design
      </a>
    </li>
  </ul>
</section>


      {/* YouTube Classes */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">🎥 YouTube Classes</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Electromagnetic Field Theory</a></li>
          <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Microprocessor & Microcontroller</a></li>
          <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">DSP & OOP</a></li>
        </ul>
      </section>

      {/* Free Courses */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">🆓 Free Courses</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>JavaScript Full Course</li>
          <li>Backend Development Course</li>
          <li>App Development</li>
          <li>MATLAB</li>
        </ul>
      </section>

      {/* Roadmaps & Guidance */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">🛠️ Roadmaps & Guidance</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><a href="https://drive.google.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">DSA Notes</a></li>
          <li><a href="https://drive.google.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Web Development Roadmap</a></li>
          <li><a href="https://drive.google.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Resume Guide</a></li>
        </ul>
      </section>

      {/* Contact Info */}
      <section className="bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">📬 Contact Info</h2>
        <ul className="text-gray-700 space-y-1 pl-6 list-disc">
          <li>Email: nauser522@gmail.com</li>
          <li>Phone: 8603410057</li>
          <li>Career Support: career@studymasalaa.com</li>
        </ul>
      </section>
 {/* Important Dates */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">📅 Important Dates</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Start of Semester: 8 January 2024</li>
            <li>Mid Semester Exams: 11–22 March 2024</li>
            <li>End Semester Exams: 7–21 May 2024</li>
          </ul>
        </section>

        {/* Timeline Section */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">📅 Semester Timeline</h2>
          <Timeline /> {/* Add the Timeline component here */}
        </section>

        {/* Syllabus Section */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">📝 Syllabus</h2>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
              Choose your subject:
            </label>
            <select
              id="subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select a Subject --</option>
              <option value="emft">Electromagnetic Field Theory</option>
              <option value="opt">Optimization Techniques</option>
              <option value="wsn">Wireless Sensor Network</option>
              <option value="dic">Digital IC Design</option>
              <option value="oop">Object Oriented Programming</option>
              <option value="dsp">Digital Signal Processing</option>
              <option value="mpmc">Microprocessor and Microcontroller</option>
              <option value="sem">Seminar and Report Writing</option>
            </select>
          </div>

          {/* Topics Covered - Placeholder */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">📖 Topics Covered</h3>
            <p className="text-gray-600">
              Please select a subject above to view the syllabus topics. (Dynamic content coming soon!)
            </p>
          </div>
        </section>
        {/* Footer */}
        <footer className="text-center mt-16 text-gray-600 text-sm border-t pt-6">
        </footer>{/* Fun Facts */}



      
      </div>

      {/* Footer */}
      <footer className="text-center mt-16 text-gray-600 text-sm border-t pt-6">
        <p>&copy; 2025 StudyMasalaa.com. All rights reserved.</p>
        <p>Total Visits: [Visit Counter Here]</p>
      </footer>
    </AnimatedPage>
  );
};

export default Home;
