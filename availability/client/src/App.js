import "./App.css";
//import React, { Component } from 'react';
//import Modal from './modal';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfemp, setListOfemp] = useState([]);
  const [name, setName] = useState("");
    const [fromdate, setFromDate] = useState(new Date());
  const [todate, settodate] = useState(new Date());

  useEffect(() => {
    Axios.get("http://localhost:8004/getemp").then((response) => {
      setListOfemp(response.data);
    });
  }, []);

  const createemp = () => {
    Axios.post("http://localhost:8004/createemp", {
      name,
      fromdate,
      todate,
     
    }).then((response) => {
      setListOfemp([
        ...listOfemp,
        {
            name,
            fromdate,
            todate,
            
        },
      ]);
    });
  };

  return (
    <div className="App">
          <div className="title">Job Shadowing Availability</div>
          
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

            <div align="center"> :</div>

            <div className="App">
        <input
          // className={`form__input  ${!fromDate && "form__input--incomplete"}`}
          id="fromDate"
          name="fromDate"
          type="date"
          autoComplete="off"
          value={
            fromdate.getFullYear().toString() +
            "-" +
            (fromdate.getMonth() + 1).toString().padStart(2, 0) +
            "-" +
            fromdate.getDate().toString().padStart(2, 0)
          }
          onChange={(e) => {
            setFromDate(new Date(e.target.value));
          }}
        />
      </div>
      </label>
            </div>


            <div>
              <label>
              <div align="center"> :</div>
               
              <div className="App">
      <input
        // className={`form__input  ${!fromDate && "form__input--incomplete"}`}
        id="todate"
        name="todate"
        type="date"
        autoComplete="off"
        value={
          todate.getFullYear().toString() +
          "-" +
          (todate.getMonth() + 1).toString().padStart(2, 0) +
          "-" +
          todate.getDate().toString().padStart(2, 0)
        }
        onChange={(e) => {
          settodate(new Date(e.target.value));
        }}
      />
    </div>
              </label>
            </div>

           
               
      <div align="center">  <button className="sb-btn" type="button" onClick={createemp}>SUBMIT</button> </div>         
          </div>         
        );
       //run client npm start and server node index.js
  } 
export default App;