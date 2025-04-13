// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Notes from './pages/Notes';
import PYQs from './pages/PYQs';
import Labs from './pages/Labs';
import Courses from './pages/Courses';
import SubmitNotes from './pages/SubmitNotes';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz'; // ✅ Make sure this exists

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {/* {isLoggedIn ? ( */}
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/pyqs" element={<PYQs />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/submit-notes" element={<SubmitNotes />} />
            <Route path="/quiz" element={<Quiz />} /> {/* ✅ FIXED: moved inside Routes */}
          </Routes>
        </>
      {/* ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )} */}
    </Router>
  );
}

export default App;
