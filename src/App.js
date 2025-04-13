import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove Router
import { useAuth } from './contexts/authContext/ind'; // Import the AuthContext hook
import Login from './components/auth/login'; // Import the Login component
import Register from './components/auth/register'; // Import the Login component
import Notes from './pages/Notes';
import PYQs from './pages/PYQs';
import Labs from './pages/Labs';
import Courses from './pages/Courses';
import SubmitNotes from './pages/SubmitNotes';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';
import { AuthProvider } from './contexts/authContext/ind'; // Wrap App with AuthProvider

function App() {
  const { userLoggedIn, currentUser } = useAuth(); // Get login status from context
  const [isLoggedIn, setIsLoggedIn] = useState(userLoggedIn);

  // Update login status on state change
  useEffect(() => {
    if (currentUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [currentUser]);

  return (
    <AuthProvider>
      {isLoggedIn ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/pyqs" element={<PYQs />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/submit-notes" element={<SubmitNotes />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </AuthProvider>
  );
}

export default App;
