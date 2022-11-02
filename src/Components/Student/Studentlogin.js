import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
// import { Cookies } from 'react-cookie';

const Studentlogin = () => {

  const navigate = useNavigate()
  const [username, setUname] = useState("")
  const [password1, setP1] = useState("")


  const validateData = (e) => {
    e.preventDefault()
    if (!username || !password1) {
      alert("All Fields Are Mandetory !!!")
      setUname("")
      setP1("")
      navigate('/login/student')
    }
    login()
  }

  // axios.defaults.xsrfHeaderName = "X-CSRFToken";
  // axios.defaults.xsrfCookieName = "csrftoken";

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(name) === 0)
        return c.substring(name.length, c.length);
    }
    return "";
  }

  axios.interceptors.request.use(
    (config) => {
      config.headers["X-CSRFToken"] = getCookie("csrftoken");
      // console.log(config, "conf")
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const login = () => {
    let baseurl = "/login/"
    axios.post(baseurl, {
      "username": username,
      "password": password1
    })
      .then(function (response) {
        var csrf_token = getCookie('csrftoken');
        localStorage.setItem("csrf_token", csrf_token)
        localStorage.setItem("username", username)
        console.log(response.data)
        console.log(response.headers)
        navigate('/student/dashboard')

      })
      .catch(function (error) {
        console.log(error)
      })

  }

  return (
    <div className='container'>
      <br /><b><h2>Student Login</h2></b><br />
      <form onSubmit={validateData}>
        <div className="container mb-3">
          <label className="form-label">User Name</label>
          <input type="text" value={username} onChange={(e) => { setUname(e.target.value) }} className="form-control" id="username" aria-describedby="emailHelp" />
        </div>
        <div className="container mb-3">
          <label className="form-label">Password</label>
          <input type="password" value={password1} onChange={(e) => { setP1(e.target.value) }} className="form-control" id="password1" />
        </div>
        <div className='container'>
          <button type="submit" className="btn btn-sn btn-success">LOGIN</button>
        </div>
      </form>
    </div>
  )
}

export default Studentlogin
