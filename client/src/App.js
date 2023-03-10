
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
  <div className="App">
    <div>
      <input
        type="text"
        placeholder="Name..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
    <div align="center">  <button className="sb-btn" type="button" >SUBMIT</button> </div> 

    <div className="empDisplay">
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
            <div>

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

