import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import StaffHeader from "./StaffHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTest = () => {
  const navigate = useNavigate();
  const [courses, setCourse] = useState([]);
  const [test_name, setTestName] = useState("");
  const [duration, setDuration] = useState(0);
  const [course_related, setCourseRelated] = useState();

  axios.defaults.headers.common["csrftoken"] =
    localStorage.getItem("csrf_token");

  useEffect(() => {
    let baseurl = "/course/";
    axios
      .get(baseurl)
      .then((responce) => {
        setCourse(responce.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const addTest = () => {
    let duration_in_seconds = duration * 3600;
    let baseurl = "/course/test/";
    axios
      .post(baseurl, {
        test_name: test_name,
        duration: duration_in_seconds,
        course_related: course_related,
      })
      .then(function (response) {
        console.log(response.data);
        alert("Test Added Successfully !!!");
        navigate("/question/add");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <StaffHeader />
      <div className="text-center">
        <br />
        <h3> Add Test </h3>
        <hr />
      </div>
      <div className="container">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Test Name
        </label>
        <input
          type="text"
          value={test_name}
          className="form-control"
          id="test"
          onChange={(e) => {
            setTestName(e.target.value);
          }}
        />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Duration of a Test (in Hrs.)
        </label>
        <input
          type="number"
          value={duration}
          className="form-control"
          id="duration"
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        />
        <br />
        <label>For Course :</label>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => setCourseRelated(e.target.value)}
        >
          {courses.map((course) => {
            return <option value={course.id}>{course.course_name}</option>;
          })}
        </select>
        <br />
        <button className="btn btn-success" onClick={addTest}>
          Add Test
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default AddTest;
