// import React, { useState } from 'react';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Signup from "./Components/Signup"
import Studentlogin from './Components/Studentlogin';
import Stafflogin from './Components/Stafflogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router>


        <Routes>
          <Route exact path='/' element={
            <div>
              <Header />
              <Home />
              <Footer />
            </div>
          }>
          </Route>
        </Routes>
        <Routes>

          <Route exact path='/login_staff' element={
            <div>
              <Header />
              <Stafflogin />
              <Footer />
            </div>
          }>

          </Route>
        </Routes>
        <Routes>

          <Route exact path='/login_student' element={
            <div>
              <Header />
              <Studentlogin />
              <Footer />
            </div>
          }>
          
          <Route exact path='/dashboard' element={
            <div>
              <Header />
              
              <Footer />
            </div>
          }></Route>

          </Route>
        </Routes>
        <Routes>

          <Route exact path='/signup' element={
            <div>
              <Header />
              <Signup />
              <Footer />
            </div>
          }>

          </Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
