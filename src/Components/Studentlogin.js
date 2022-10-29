import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

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
      navigate('/login_student')
    }
    login()
  }
  axios.defaults.xsrfHeaderName = "X-CSRFToken";
  axios.defaults.xsrfCookieName = "csrftoken";
  const login = () => {
    let baseurl = "http://127.0.0.1:8000/login/"
    axios.post(baseurl, {
      "username": username,
      "password": password1
    })
      .then(function (response) {
        console.log(response.data)
        // navigate('/login_student')
        // alert("Signup Successful !!!")
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
