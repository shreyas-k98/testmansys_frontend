import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const StudentHeader = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/student/dashboard">
            {" "}
            Student DashBoard{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/student/profile"
                >
                  View Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/student/courses"
                >
                  View All Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/student/courses_enrolled"
                >
                  Enrolled Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/student/tests">
                  View All Tests
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/"
                  onClick={(e) => {
                    axios
                      .delete("/login/")
                      .then(function (responce) {
                        console.log(responce.data);
                        alert("Logged Out !!!");
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                  }}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default StudentHeader;
