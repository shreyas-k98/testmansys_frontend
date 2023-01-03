// import React, { useState } from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Studentlogin from "./Components/Student/Studentlogin";
import Stafflogin from "./Components/Staff/Stafflogin";
import StudentHeader from "./Components/Student/StudentHeader";
import StudentDashBoard from "./Components/Student/StudentDashBoard";
import StudentProfile from "./Components/Student/StudentProfile";
import StudentCourses from "./Components/Student/StudentCourses";
import EnrolledCourses from "./Components/Student/EnrolledCourses";
import StaffHeader from "./Components/Staff/StaffHeader";
import Tests from "./Components/Student/Tests";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StaffDashBoard from "./Components/Staff/StaffDashBoard";
import ViewStudents from "./Components/Staff/ViewStudents";
import AddCourses from "./Components/Staff/AddCourses";
import AddTest from "./Components/Staff/AddTest";
import AddQuestion from "./Components/Staff/AddQuestion";

function App() {
  console.log("Hello !!!")
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
            path="/course/add"
            element={
              <div>
                <AddCourses />
              </div>
            }
          />
          <Route
            exact
            path="/question/add"
            element={
              <div>
                <AddQuestion />
              </div>
            }
          />
          <Route
            exact
            path="/test/add"
            element={
              <div>
                <AddTest />
              </div>
            }
          />
          <Route
            exact
            path="student/courses_enrolled"
            element={
              <div>
                <EnrolledCourses />
              </div>
            }
          />
          <Route
            exact
            path="/student/tests"
            element={
              <div>
                <Tests />
              </div>
            }
          />
          <Route
            exact
            path="/"
            element={
              <div>
                <Header />
                <Signup />
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
            path="/student/view"
            element={
              <div>
                <StaffHeader />
                <ViewStudents />
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
            path="/staff/dashboard"
            element={
              <div>
                <AddTest />
              </div>
            }
          />

          <Route
            exact
            path="/student/dashboard"
            element={
              <div>
                <StudentProfile />
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
