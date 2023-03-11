import "./App.css";
//import React, { Component } from 'react';
//import Modal from './modal';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfemp, setListOfemp] = useState([]);
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());
  const [tech, setTech] = useState("");

  

  useEffect(() => {
    Axios.get("http://localhost:8080/getemp").then((response) => {
      setListOfemp(response.data);
    });
  }, []);

  const createemp = () => {
    Axios.post("http://localhost:8080/createemp", {
      name,
        email,
        location,
        duration,
        date,
        tech,
     
    }).then((response) => {
      setListOfemp([
        ...listOfemp,
        {
          name,
          email,
          location,
          duration,
          date,
          tech,
            
        },
      ]);
    });
  };

  return (
    <div className="app">
    <form method="POST">
          <div className="title">Job Shadowing Request</div>
          
          <div align="center"><div className="App"></div></div>

            <div>
              <label>
              <div align="center">Name:</div>
                <input
          type="text"
          
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
              </label>
            </div>

            <div>
              <label>
              <div align="center">Email:</div>
                <input
          type="text"
          
          onChange={(event) => {
            setMail(event.target.value);
          }}
        />
              </label>
            </div>


            <div>
              <label>
              <div align="center">Location:</div>
                <input
          type="text"
          
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
              </label>
            </div>

            <div>
              <label>
              <div align="center">Duration:</div>
                <input
          type="text"
          
          onChange={(event) => {
            setDuration(event.target.value);
          }}
        />
              </label>
            </div>
          
            <div>
              <label>

            <div align="center"> :</div>

            <div className="App">
        <input
          // className={`form__input  ${!fromDate && "form__input--incomplete"}`}
          id="date"
          name="date"
          type="date"
          autoComplete="off"
          value={
            date.getFullYear().toString() +
            "-" +
            (date.getMonth() + 1).toString().padStart(2, 0) +
            "-" +
            date.getDate().toString().padStart(2, 0)
          }
          onChange={(e) => {
            setDate(new Date(e.target.value));
          }}
        />
      </div>
      </label>
            </div>

            <div>
              <label>
              <div align="center">Tech:</div>
                <input
          type="text"
          
          onChange={(event) => {
            setTech(event.target.value);
          }}
        />
              </label>
            </div>

            
            
               
      <div align="center">  <button className="sb-btn" type="button" onClick={createemp}>SUBMIT</button> </div>         
      </form>
    </div>       
        );
       //run client npm start and server node index.js
  } 
  

export default App;
