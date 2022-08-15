import React, { useEffect, useState } from "react";
import Axios from "axios";
import Map from "./Map";
import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

function App() {
  // Setting up the initial state variables
  const [ipDetails, setIpDetails] = useState([]);
  const [lat, setLat] = useState(22.5726);
  const [lon, setLon] = useState(88.3832);

  // Fetching the API once when the
  // component is mounted
  useEffect(() => {
    Axios.get("https://ipapi.co/json/").then((res) => {
      setIpDetails(res.data);
      setLat(res.data.latitude);
      setLon(res.data.longitude);
    });
  }, []);

  return (
    <>
      {/* <h1 className="heading">Find My IP</h1> */}
      <div className="App">
        <div className="left">
          <h4>What is my IPv4 address??</h4>
          <h1 id="ip">{ipDetails.ip}</h1>

          <button onClick={() => navigator.clipboard.writeText(ipDetails.ip)}>
            Copy <i class="fa fa-clone"></i>
          </button>

          <br></br>

          <br></br>
          <h4>Approximate location: </h4>

          <p>
            <i class="fa fa-map-marker fa-lg"></i> {ipDetails.city},{" "}
            {ipDetails.region}, {ipDetails.country_name}.
          </p>

          <h4>Internet Service Provider (ISP):</h4>

          <p>
            <i class="fa fa-signal"></i> {ipDetails.org}
          </p>
        </div>
        <Map lat={lat} lon={lon} />
      </div>
    </>
  );
}

export default App;
