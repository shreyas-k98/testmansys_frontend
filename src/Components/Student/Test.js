import React from 'react'
import StudentHeader from './StudentHeader'
import Footer from '../Footer'

const Test = (props) => {
  return (
    <div>
      <StudentHeader />
      <h1> Test Component </h1> 
      <h1> Test id : {props.test_id} </h1>
      <Footer />
    </div>
  )
}

export default Test
