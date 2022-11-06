import StudentHeader from "./StudentHeader";
import Footer from "../Footer";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const StudentCourses = () => {
  const [courses, setCourses] = useState([]);
  axios.defaults.headers.common["csrftoken"] =
    localStorage.getItem("csrf_token");

    let baseurl = "/course/";
    useEffect(() => {
      axios.get(baseurl).then((responce) => {
      let courses = responce.data
      setCourses(courses)
  
    });
    }, []);



  return (
    <div>
      <StudentHeader />
      <div>
        {courses.map((course) => {
          return (
            <div className="container">
              <div className="card row">
                <div clasNames="card-body col-10">
                  <h5 clasNames="card-title">{course.course_name}</h5>
                  <p className="card-text">Created By : <b>{course.creator_name}</b> 
                  </p>
                  <button onClick = {()=>{
                      let baseurl = "/course/enroll/";
                        axios
                          .post(baseurl, {
                            "course_enrolled": course.course_name,
                          })
                          .then(function (response) {
                            console.log(response.data);
                            alert("Enrolled !!!");
                          })
                          .catch(function (error) {
                            console.log(error);
                          });
                  }}className="btn btn-success">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default StudentCourses;
