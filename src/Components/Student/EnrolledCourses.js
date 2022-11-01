import React from "react";
import StudentHeader from "./StudentHeader";
import Footer from "../Footer";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const EnrolledCourses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  axios.defaults.headers.common["csrftoken"] =
    localStorage.getItem("csrf_token");

  let baseurl = "/course/enrolled";
  axios.get(baseurl).then((responce) => {
    let courses = responce.data;
    setCourses(courses);
  });

  return (
    <div>
      <StudentHeader />

      {courses.map((course) => {
        return (
          <div className="container">
            <div className="card row">
              <div clasNames="card-body col-10">
                <h5 clasNames="card-title">{course.course_name}</h5>
                <Link
                  onClick={() => {
                    navigate("/student/tests");
                    
                  }}
                  className="btn btn-success"
                >
                  View Tests
                </Link>
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default EnrolledCourses;
