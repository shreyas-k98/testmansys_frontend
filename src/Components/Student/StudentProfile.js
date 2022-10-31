import StudentHeader from './StudentHeader'
import Footer from '../Footer'
import React, { useState } from 'react'
import axios from "axios"



const StudentProfile = () => {

    const [roll, setR] = useState("")
    const [username, setUN] = useState("")
    const [first_name, setFN] = useState("")
    const [last_name, setLN] = useState("")
    const [email, setE] = useState("")


    // axios.defaults.xsrfHeaderName = "X-CSRFToken";
    // axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers.common['csrftoken'] = localStorage.getItem("csrf_token") // for all requests


    let baseurl = "/user/"
    axios.get(baseurl).then((responce) => {
        // console.log(responce.data)
        setR(responce.data['id'])
        setUN(responce.data['username'])
        setFN(responce.data['first_name'])
        setLN(responce.data['last_name'])
        setE(responce.data['email'])

        console.log(username, first_name, last_name, email)

    })
        .catch(function (error) {
            console.log(error)
        })

    return (
        <div>
            <StudentHeader />
            <div className='text-center'><br />
                <h3>Student Profile</h3><hr />
            </div>
            <div className='container'>
                <h1> Roll no : {roll} </h1>
                <h1> User Name : {username} </h1>
                <h1> First Name : {first_name} </h1>
                <h1> Last Name : {last_name} </h1>
                <h1> Email Address : {email} </h1>
            </div>
            <Footer />
        </div>
    )
}

export default StudentProfile
