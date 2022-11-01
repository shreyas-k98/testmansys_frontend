import React from "react";
import StudentHeader from "./StudentHeader";
import Footer from "../Footer";
import axios from "axios";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Test from "./Test";
// import { Route, } from "react-router-dom";

const Tests = () => {
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);
  axios.defaults.headers.common["csrftoken"] =
    localStorage.getItem("csrf_token");

  let baseurl = "/course/test/";
  axios.get(baseurl).then((responce) => {
    let tests = responce.data;
    setTests(tests);
  });

  return (
    <div>
      <StudentHeader />

      {tests.map((test) => {
        return (
          <div className="container">
            <div className="card row">
              <div clasNames="card-body col-10">
                <h5 clasNames="card-title">{test.test_name}</h5>
                <p>Duration : {test.duration}</p>
                <p>From : {test.course_related}</p>
                <a
                  // onClick={() => {
                  //   console.log("clicked")
                  //   return(
                  //       <Test test_id = {test.id}/>
                  //   )
                  // }}
                  herf = { <Test test_id = {test.id} />}
                  className="btn btn-success"
                >
                  Start Test
                </a>
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default Tests;
