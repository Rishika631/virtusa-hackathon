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
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "30px" }}>Job Shadowing Availability</h1>
      
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
          Name:
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
            style={{ display: "block", fontSize: "18px", padding: "10px", borderRadius: "5px", border: "2px solid #ddd" }}
          />
        </label>
      </div>
  
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
          From Date:
          <input
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
            style={{ display: "block", fontSize: "18px", padding: "10px", borderRadius: "5px", border: "2px solid #ddd" }}
          />
        </label>
      </div>
  
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
          To Date:
          <input
            id="toDate"
            name="toDate"
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
            style={{ display: "block", fontSize: "18px", padding: "10px", borderRadius: "5px", border: "2px solid #ddd" }}
          />
        </label>
      </div>
  
      <button
        type="button"
        onClick={createemp}
        style={{ fontSize: "24px", fontWeight: "bold", padding: "10px 20px", borderRadius: "5px", border: "none", backgroundColor: "purple", color: "#fff" }}
      >
        SUBMIT
      </button>
    </div>
  );
          }
  
export default App;
