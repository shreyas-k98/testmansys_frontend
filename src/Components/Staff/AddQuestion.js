import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import StaffHeader from "./StaffHeader";
import axios from "axios";

const AddQuestion = () => {

    const [tests, setTest] = useState([])
    const[question, setQuestion] = useState("")
    const[option1, setOption1] = useState("")
    const[option2, setOption2] = useState("")
    const[option3, setOption3] = useState("")
    const[option4, setOption4] = useState("")
    const[test_related, setTestRelated] = useState(0)
    const[answer, setAnswer] = useState("")

    axios.defaults.headers.common["csrftoken"] =
    localStorage.getItem("csrf_token");

    useEffect(() => {
        let baseurl = "/course/test/";
        axios
          .get(baseurl)
          .then((responce) => {
            setTest(responce.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, []);

      const addQuestion = () => {
        
        let baseurl = "/course/test/question/";
        axios
          .post(baseurl, {
            "question": question,
            "option_1": option1,
            "option_2": option2,
            "option_3": option3,
            "option_4": option4,
            "answer": answer,
            "test_related": test_related
          })
          .then(function (response) {
            console.log(response)
            alert("Question Added Sucessfuly !!!")
            setQuestion("")
            setOption1("")
            setOption2("")
            setOption3("")
            setOption4("")
            setAnswer("")
            setTestRelated("")
          })
          .catch(function (error) {
           console.log(error)
          })}
      
  return (
    <div>
      <StaffHeader />
      <div className="text-center">
        <br />
        <h3> Add Question </h3>
        <hr />
      </div>
      <div className="container">
        <div className="container">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Question
          </label>
          <input
            type="text"
            value={question}
            className="form-control"
            id="test"
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
          <label htmlFor="exampleInputEmail1" className="form-label">
            Option 1
          </label>
          <input
            type="text"
            value={option1}
            className="form-control"
            id="test"
            onChange={(e) => {
              setOption1(e.target.value);
            }}
          />
          <label htmlFor="exampleInputEmail1" className="form-label">
            Option 2
          </label>
          <input
            type="text"
            value={option2}
            className="form-control"
            id="test"
            onChange={(e) => {
              setOption2(e.target.value);
            }}
          />
          <label htmlFor="exampleInputEmail1" className="form-label">
            Option 3
          </label>
          <input
            type="text"
            value={option3}
            className="form-control"
            id="test"
            onChange={(e) => {
              setOption3(e.target.value);
            }}
          />
          <label htmlFor="exampleInputEmail1" className="form-label">
            Option 4
          </label>
          <input
            type="text"
            value={option4}
            className="form-control"
            id="test"
            onChange={(e) => {
              setOption4(e.target.value);
            }}
          />
          <label htmlFor="exampleInputEmail1" className="form-label">
            Answer
          </label>
          <input
            type="text"
            value={answer}
            className="form-control"
            id="test"
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          />
          <br />
          <label>For Test :</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setTestRelated(e.target.value)}
          >
            {tests.map((test) => {
              return <option value={test.id}>{test.test_name}</option>;
            })}
          </select>
          <br />
          <button className="btn btn-success" onClick={addQuestion}>
            Add Question
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddQuestion;
