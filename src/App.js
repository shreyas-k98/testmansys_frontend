// import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Studentlogin from './Components/Student/Studentlogin';
import Stafflogin from './Components/Staff/Stafflogin';
import DashBoard from './Components/Student/StudentDashBoard';
import StudentHeader from './Components/Student/StudentHeader';
import StudentDashBoard from "./Components/Student/StudentDashBoard"
import StudentProfile from './Components/Student/StudentProfile';
import StudentCourses from "./Components/Student/StudentCourses"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route
            exact
            path="student/profile"
            element={
              <div>
                <StudentProfile />
              </div>
            }
          />

          <Route
            exact
            path="student/courses"
            element={
              <div>
                <StudentCourses />
              </div>
            }
          />

          <Route
            exact
            path="/"
            element={
              <div>
                <Header />
                <Home />
                <Footer />
              </div>
            }
          />

          <Route
            exact
            path="/login/staff"
            element={
              <div>
                <Header />
                <Stafflogin />
                <Footer />
              </div>
            }
          />

          <Route
            exact
            path="/login/student"
            element={
              <div>
                <Header />
                <Studentlogin />
                <Footer />
              </div>
            }
          />

          <Route
            exact
            path="/staff_dashboard"
            element={
              <div>
                <Header navbar_title="Staff Dashboard" />
                <DashBoard />
                <Footer />
              </div>
            }
          />

          <Route
            exact
            path="/student/dashboard"
            element={
              <div>
                <StudentHeader />
                <StudentDashBoard />
                <Footer />
              </div>
            }
          />

          <Route
            exact
            path="/signup"
            element={
              <div>
                <Header />
                <Signup />
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;