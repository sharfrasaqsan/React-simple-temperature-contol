import React, { useState } from "react";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(0);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    const newTemperature = temperature + 1;
    if (newTemperature > 20) {
      setTemperatureColor("hot");
    }
    setTemperature(newTemperature);
  };

  const decreaseTemperature = () => {
    const newTemperature = temperature - 1;
    if (newTemperature < 20) {
      setTemperatureColor("cold");
    }
    setTemperature(newTemperature);
  };

  return (
    <div className="container-fluid">
      <div className="card text-center">
        <div className="card-body">
          <h1>Temperature Control</h1>
        </div>
        <div className="my-2">
          <h2>Current Temperature</h2>
          <h3 className={`display-temperature ${temperatureColor}`}>
            {temperature}°C
          </h3>
          <button
            className="btn btn-primary mx-3"
            onClick={increaseTemperature}
          >
            +
          </button>
          <button className="btn btn-danger mx-3" onClick={decreaseTemperature}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
