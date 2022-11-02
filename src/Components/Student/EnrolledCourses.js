import React, { useEffect } from "react";
import StudentHeader from "./StudentHeader";
import Footer from "../Footer";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Tests from "./Tests";

const EnrolledCourses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [showTest, setShowTest] = useState(false);

  const showTestFunc = () => {
    if(showTest){
      console.log("Func call")
      return (
        <div>
          <Tests />
        </div>
      )
    }
  }

  axios.defaults.headers.common["csrftoken"] =
    localStorage.getItem("csrf_token");

  let baseurl = "/course/enrolled";

  useEffect(() => {
    axios.get(baseurl).then((responce) => {
      let courses = responce.data;
      setCourses(courses);
    });
  }, []);

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
                    // navigate("student/tests/");
                    {
                      setShowTest(true);
                      showTestFunc()
                    }
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
