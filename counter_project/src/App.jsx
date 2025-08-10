import { useState } from "react";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(false);

  function toggleBulb() {
    setIsOn(!isOn);
  }

  return (
    <div className="container">
      <div className={`bulb-shape ${isOn ? "on" : "off"}`}>
        <div className="glass"></div>
        <div className="holder"></div>
      </div>
      <button onClick={toggleBulb}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}

export default App;
