import React, { useState } from "react";
import Footer from "../Footer";
import StaffHeader from "./StaffHeader";
import axios from "axios";

const AddCourses = () => {
  const [course, setCourse] = useState("");
  axios.defaults.headers.common["csrftoken"] =
    localStorage.getItem("csrf_token"); // for all requests

  const addCourse = async () => {
    let baseurl = "/course/";
    await axios
      .post(baseurl, {
        course_name: course,
      })
      .then((response) => {
        alert("Course Added Successfully !!!");
        setCourse("")
        console.log(response);
      })
      .catch((err) => console.log(err, "err"));
  };
  return (
    <div>
      <StaffHeader />
      <div className="text-center">
        <br />
        <h3> Add Course </h3>
        <hr />
      </div>
      <div className="container"><br />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Add Course Name
        </label>
        <input
          type="text"
          value={course}
          className="form-control"
          id="course"
          onChange={(e) => {
            setCourse(e.target.value);
          }}
        />
        <br />
        <button className="btn btn-success" onClick={addCourse}>
          Add Course
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default AddCourses;
