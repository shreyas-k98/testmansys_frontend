import StudentHeader from "./StudentHeader";
import Footer from "../Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StudentCourses = () => {
  axios.defaults.headers.common["csrftoken"] =
    localStorage.getItem("csrf_token"); // for all requests

  const [courses, setC] = useState([]);
  console.log("---", courses);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    let baseurl = "/course/";
    await axios
      .get(baseurl)
      .then((response) => {
        // let courses = []
        setC(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const enroll = (course_name) => {

  }


  return (
    <div>
      <StudentHeader />
      <div className="container">
        {courses?.length === 0 ? (
          <div className="text-center">
            <h3>No Courses To Display</h3>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              {courses?.map((course) => {
                return (
                  <div className="col-4">
                    <div className="card" style={{ width: "18rem" }}>
                      <div className="card-body">
                        <h5 className="card-title">{course["course_name"]}</h5>
                        <p className="card-text">{course["creator_name"]}</p>
                        <Link className="btn btn-success" onClick={() => {enroll(course['course_name'])}}>
                          Enroll
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default StudentCourses;
