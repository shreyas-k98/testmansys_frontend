import StudentHeader from "./StudentHeader";
import Footer from "../Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentProfile = () => {
  const [roll, setRoll] = useState("");
  const [username, setUsername] = useState("");
  const [first_name, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");

  axios.defaults.headers.common["csrftoken"] =localStorage.getItem("csrf_token"); // for all requests

  let baseurl = "/user/";
  useEffect(() => {
    axios
      .get(baseurl)
      .then((responce) => {
        setRoll(responce.data["id"]);
        setUsername(responce.data["username"]);
        setFirstname(responce.data["first_name"]);
        setLastname(responce.data?.last_name);
        setEmail(responce.data["email"]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // console.log(lastName, "lastName")

  const update = async() => {
    let baseurl = "/student/";
    await axios.put(baseurl, {
        first_name: first_name,
        last_name: lastName,
        email: email,
      })
      .then((response) => {
        alert("Details Updated Successfully !!!")
        console.log(response);    
      })
      .catch((err) => console.log(err, "err"))
  };
  //   console.log(lastName, "lastName")

  return (
    <div>
      <StudentHeader />
      <div className="text-center">
        <br />
        <h3>Student Profile</h3>
        <hr />
      </div>
      <div className="container">
        {/* <form> */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Roll No.
            </label>
            <input
              type="text"
              value={roll}
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              value={username}
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              value={first_name}
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              className="form-control"
              id="username"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              className="form-control"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <button className="btn btn-success"
             onClick={update}
            >
              Update
            </button>
          </div>
        {/* </form> */}
      </div>
      <Footer />
    </div>
  );
};

export default StudentProfile;
