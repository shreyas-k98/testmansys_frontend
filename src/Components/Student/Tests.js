import React, { useEffect } from "react";
import Footer from "../Footer";
import StudentHeader from "./StudentHeader";
import axios from "axios";
import { useState } from "react";

const Tests = () => {
  const [tests, setTests] = useState([]);
  let course_name = localStorage.getItem("course_name");
  axios.defaults.headers.common["csrftoken"] =
    localStorage.getItem("csrf_token");

  let course_related = localStorage.getItem("course_id");
  let baseurl = "/course/test/" + course_related;
  useEffect(() => {
    axios.get(baseurl).then((responce) => {
      setTests(responce.data);
    });
  }, []);

  return (
    <div>
      <StudentHeader />
      <div className="text-center">
        <br />
        <h3>{course_name} Tests</h3>
        <hr />
      </div>
      <div className="container">
        {tests.map((test) => {
          return (
            <div>
              <h4>Test Number : {test.id}</h4>
              <h3>Test Name : {test.test_name}</h3>
              <h3>Duration : {test.duration}</h3>
              {/* <div className="card row">
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
              </div> */}
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Tests;
