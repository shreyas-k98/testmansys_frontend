import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StaffHeader = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/staff/dashboard">
            Staff DashBoard
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
                  to="/student/view"
                >
                  View Students
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/course/add"
                >
                  Add Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/test/add"
                >
                  Add Tests
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/question/add">
                  Add Questions
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

export default StaffHeader;
