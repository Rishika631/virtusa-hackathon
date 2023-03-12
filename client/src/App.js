import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfemp, setListOfemp] = useState([]);
  const [searchemp, setSearch] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:4001/search").then((response) => {
      setListOfemp(response.data);
    });
  }, []);

  const cardStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    gridGap: "20px",
    padding: "20px"
  };

  const cardTitleStyles = {
    marginBottom: "10px"
  };

  const cardBodyStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: "10px"
  };

  const cardRowStyles = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "10px"
  };

  const cardBtnStyles = {
    backgroundColor: "purple",
    border: "none",
    color: "white",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    borderRadius: "5px",
    margin: "10px 0",
    cursor: "pointer"
  };

  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "10px" }}>
      <div>
        <input
          type="text"
          placeholder="Name..."
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "300px"
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div align="center">
        <button className="sb-btn" type="button" style={cardBtnStyles}>
          SUBMIT
        </button>
      </div>

      <div style={cardStyles}>
        {listOfemp
          .filter((value) => {
            if (searchemp === "") {
              return value.name;
            } else if (value.name.toLowerCase().includes(searchemp.toLowerCase())) {
              return value.name;
            }
          })
          .map((emp) => {
            return (
              <div key={emp.id} style={{ backgroundColor: "#fff", borderRadius: "5px", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
                <h3 style={cardTitleStyles}>{emp.name}</h3>
                <div style={cardBodyStyles}>
                  <div style={cardRowStyles}>
                    <span>From Date:</span>
                    <span>{emp.fromdate}</span>
                  </div>
                  <div style={cardRowStyles}>
                    <span>To Date:</span>
                    <span>{emp.todate}</span>
                  </div>
                </div>
                <button
                  style={cardBtnStyles}
                  onClick={() => {
                    window.location.href = "https://localhost:3000/request";
                  }}
                >
                  Schedule
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
