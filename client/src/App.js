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
    Axios.get("http://localhost:8004/getemp").then((response) => {
      setListOfemp(response.data);
    });
  }, []);

  const createemp = () => {
    Axios.post("http://localhost:8004/createemp", {
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
    <div
      className="app"
      style={{
        backgroundImage:
          "url('https://ww.transparenttextures.com/patterns/brick-wall-dark.png')",
      }}
    >
      <form
        method="POST"
        style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}
      >
        <div
          className="title"
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
            color: "black",
            textShadow: "1px 1px #000",
          }}
        >
          Job Shadowing Request
        </div>

        <div align="center">
          <div className="App"></div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              textAlign: "center",
              color: "black",
              textShadow: "1px 1px #000",
            }}
          >
            Name:
            <input
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                borderRadius: "5px",
                border: "none",
                color: "black",
                boxShadow: "1px 1px #000",
              }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              textAlign: "center",
              color: "black",
              textShadow: "1px 1px #000",
            }}
          >
            Email:
            <input
              type="text"
              onChange={(event) => {
                setMail(event.target.value);
              }}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                borderRadius: "5px",
                border: "none",
                color: "black",
                boxShadow: "1px 1px #000",
              }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              textAlign: "center",
              color: "black",
              textShadow: "1px 1px #000",
            }}
          >
            Location:
            <input
              type="text"
              onChange={(event) => {
                setLocation(event.target.value);
              }}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                borderRadius: "5px",
                border: "none",
                color: "black",
                boxShadow: "1px 1px #000",
              }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              textAlign: "center",
              color: "black",
              textShadow: "1px 1px #000",
            }}
          >
            Duration:
            <input
              type="text"
              onChange={(event) => {
                setDuration(event.target.value);
              }}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                borderRadius: "5px",
                border: "none",
                color: "black",
                boxShadow: "1px 1px #000",
              }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              textAlign: "center",
              color: "black",
              textShadow: "1px 1px #000",
            }}
          >
            Date:
            <div className="App">
              <input
                // className={`form__input  ${!fromDate && "form__input--incomplete"}`}
                id="date"
                name="date"
                type="date"
                autoComplete="off"
                style={{
                  backgroundColor: "#F7F7F7",
                  color: "#000",
                  borderRadius: "5px",
                  padding: "10px",
                }}
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
          <label
            style={{
              display: "block",
              textAlign: "center",
              color: "black",
              textShadow: "1px 1px #000",
            }}
          >
            Tech:
            <input
              type="text"
              onChange={(event) => {
                setTech(event.target.value);
              }}
              style={{
                backgroundColor: "#F7F7F7",
                color: "#000",
                borderRadius: "5px",
                padding: "10px",
                width: "100%",
              }}
            />
          </label>
        </div>

        <div style={{ textAlign: "center" }}>
          {" "}
          <button
            className="sb-btn"
            type="button"
            onClick={createemp}
            style={{
              backgroundColor: "jasmine",
              color: "#FFF",
              padding: "10px 20px",
              borderRadius: "5px",
              boxShadow: "2px 2px #888",
            }}
          >
            SUBMIT
          </button>{" "}
        </div>
      </form>
    </div>
  );
}

export default App;
