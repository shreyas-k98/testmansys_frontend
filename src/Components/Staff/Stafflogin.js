import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Stafflogin = () => {

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
  axios.defaults.xsrfHeaderName = "X-CSRFToken";
  axios.defaults.xsrfCookieName = "csrftoken";
  const login = () => {
    let baseurl = "/login/"
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
      <br /><b><h2>Staff Login</h2></b><br />
            <form onSubmit = {validateData}>
                <div className="container mb-3">
                    <label htmlFor="title" className="form-label">USER NAME</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="container mb-3">
                    <label htmlFor="desc" className="form-label">PASSWORD</label>
                    <input type="desc" className="form-control" id="desc" />
                </div>
                <div className='container'>
                    <button type="submit" className="btn btn-sn btn-success">LOGIN</button>
                </div>
            </form>
    </div>
  )
}

export default Stafflogin
