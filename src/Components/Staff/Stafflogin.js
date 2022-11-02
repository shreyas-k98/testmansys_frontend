import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Stafflogin = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password1, setPassword] = useState("")

  const validateData = (e) => {
    e.preventDefault()
    if (!username || !password1) {
      alert("All Fields Are Mandetory !!!")
      setUsername("")
      setPassword("")
    }
    login()
  }

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
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );


  axios.defaults.xsrfHeaderName = "X-CSRFToken";
  axios.defaults.xsrfCookieName = "csrftoken";
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
        navigate('/staff/dashboard')
      })
      .catch(function (error) {
        console.log(error)
      })
  }


  return (
    <div className='container'>
      <br /><b><h2>Staff Login</h2></b><br />
            <form onSubmit = {validateData}>
                <div className="container mb-3">
                    <label htmlFor="title" className="form-label">USER NAME</label>
                    <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} className="form-control" id="username" aria-describedby="emailHelp" />
                </div>
                <div className="container mb-3">
                    <label htmlFor="desc" className="form-label">PASSWORD</label>
                    <input type="password" value={password1} onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="desc" />
                </div>
                <div className='container'>
                    <button type="submit" className="btn btn-sn btn-success">LOGIN</button>
                </div>
            </form>
    </div>
  )
}

export default Stafflogin
