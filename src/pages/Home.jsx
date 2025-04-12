import React from "react";
import AnimatedPage from "../components/Animate";
import Timeline from "../components/Timeline"; // Import Timeline component

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
          <li>Electromagnetic Field Theory</li>
          <li>Microprocessor & Microcontroller</li>
          <li>Digital Signal Processing</li>
          <li>Object Oriented Programming</li>
          <li>Seminar and Report Writing</li>
          <li>Optimization Techniques</li>
          <li>Wireless Sensor Network</li>
          <li>Digital IC Design</li>
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
{/* Syllabus Section */}
<section className="bg-white rounded-xl shadow-md p-6 mb-10">
  <h2 className="text-2xl font-semibold text-purple-700 mb-4">📝 Syllabus</h2>

  {/* Choose your subject */}
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
</section> {/* Important Dates */}
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
<section className="bg-white rounded-xl shadow-md p-6 mb-10">
  <h2 className="text-2xl font-semibold text-purple-700 mb-4">🧠 Fun & Inspiring Facts</h2>
  <ul className="list-disc pl-6 text-gray-700 space-y-2">
    <li>The word “student” comes from the Latin word *studere*, meaning “to be eager.”</li>
    <li>Neurons in your brain create new connections every time you learn something new.</li>
    <li>Studying in short bursts of 25 minutes (Pomodoro Technique) boosts memory!</li>
    <li>Dr. APJ Abdul Kalam used to study under streetlights due to lack of electricity in childhood.</li>
    <li>Elon Musk read 10 hours a day as a child — now he builds rockets!</li>
  </ul>
</section>

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
