import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import StaffHeader from "./StaffHeader";
import Footer from "../Footer";
import { Table } from "reactstrap";



const ViewStudents = () => {
  const [students, setStudents] = useState([]);
  axios.defaults.headers.common["csrftoken"] =
    localStorage.getItem("csrf_token"); // for all requests

  let baseurl = "/student/";
  useEffect(() => {
    axios
      .get(baseurl)
      .then((responce) => {
        let students = responce.data;
        setStudents(students);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <Table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
          </tr>
          </thead>
          {students.map((student) => {
            return (
              
                <tbody>
                <tr>
                  <td>{student.username}</td>
                  <td>{student.first_name}</td>
                  <td>{student.last_name}</td>
                  <td>{student.email}</td>
                </tr>
                </tbody>
              
            );
          }
          )}
        </Table>
      </div>
      <Footer />
    </div>
  );
};

export default ViewStudents;
