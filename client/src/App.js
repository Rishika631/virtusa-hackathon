
import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [loading, setloading] = useState(false);
  const [listOfemp, setListOfemp] = useState([]);
  const [searchemp, setSearch] = useState("");

  useEffect(() => {

    Axios.get("http://localhost:4001/search").then((response) => {
      setListOfemp(response.data);

    });

  }, []);

  
  return (
    <div className="App" style={{ 
        backgroundColor: '#f0f0f0',
        padding: '20px',
        borderRadius: '10px',
        }}>
      <div>
        <input
          type="text"
          placeholder="Name..."
          style={{ 
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '300px',
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div align="center">  
        <button 
          className="sb-btn" 
          type="button"
          style={{
            backgroundColor: 'purple',
            border: 'none',
            color: 'white',
            padding: '10px 20px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            borderRadius: '5px',
            margin: '10px 0',
            cursor: 'pointer',
          }} 
        >
          SUBMIT
        </button> 
      </div> 
  
      <div className="empDisplay" style={{ 
          marginTop: '20px',
          }}>
        {listOfemp
          .filter((value) => {
            if (searchemp ==="") {
              return value.name;
            } else if (value.name.toLowerCase().includes(searchemp.toLowerCase())) {
              return value.name;
            }
            
          })
          .map((emp) => {
            return (
              <div style={{ 
                  backgroundColor: '#fff',
                  padding: '10px',
                  borderRadius: '5px',
                  margin: '10px 0',
                  }}>
                <h6>Name: {emp.name}</h6>
                <h6>From Date: {emp.fromdate}</h6>
                <h6>To Date: {emp.todate}</h6>
              </div>
            );
          }
          )}
      </div>
    </div>
  );
  
}

export default App;

