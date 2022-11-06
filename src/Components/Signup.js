import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [username, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setP1] = useState("");
  const [password2, setP2] = useState("");

  const validateData = (e) => {
    e.preventDefault();
    if (
      !first_name ||
      !last_name ||
      !username ||
      !email ||
      !password1 ||
      !password2
    ) {
      alert("All Fields Are Mandetory !!!");
      setUname("");
      setFname("");
      setLname("");
      setEmail("");
      setP1("");
      setP2("");
      navigate("/signup");
    }
    if (password1 !== password2) {
      alert("Password Dose Not Match !!!");
      setUname("");
      setFname("");
      setLname("");
      setEmail("");
      setP1("");
      setP2("");
      navigate("/signup");
    }

    signup();
  };
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  const signup = () => {
    let baseurl = "/student/";
    axios
      .post(baseurl, {
        username: username,
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password1,
      })
      .then(function (response) {
        console.log(response.data);
        navigate("/login/student");
        alert("Signup Successful !!!");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="text-center">
        <br />
        <h3> Student Signup </h3>
        <hr />
      </div>
      <div className="container">
        <form onSubmit={validateData}>
          <div className="container mb-3">
            <label className="form-label">Choose A User Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUname(e.target.value);
              }}
              id="username"
              aria-describedby="emailHelp"
              className="form-control"
            />
          </div>
          <div className="container mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              value={first_name}
              onChange={(e) => {
                setFname(e.target.value);
              }}
              className="form-control"
              id="first_name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="container mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              value={last_name}
              onChange={(e) => {
                setLname(e.target.value);
              }}
              className="form-control"
              id="last_name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="container mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="container mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password1}
              onChange={(e) => {
                setP1(e.target.value);
              }}
              className="form-control"
              id="password1"
            />
          </div>
          <div className="container mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              value={password2}
              onChange={(e) => {
                setP2(e.target.value);
              }}
              className="form-control"
              id="password2"
            />
          </div>
          <div className="container">
            <button type="submit" className="btn btn-sn btn-success">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
