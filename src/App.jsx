import "./App.css";
import { useState } from "react";

export default function App() {
  const [widd, setWid] = useState(10);
  const [disabled, setDisabled] = useState(false);
  function handleclick() {
    setWid(widd + 10);
  }
  function handlehandlereset() {
    setWid(10);
  }
  return (
    <div className="App">
      <div className="progress">
        <div className="progress-bar" style={{ width: `${widd}%` }}>
          {widd}%
        </div>
      </div>
      <button disabled={widd === 100} onClick={handleclick}>
        {" "}
        Increase
      </button>
      <button disabled={widd === 10} onClick={handlehandlereset}>
        Reset
      </button>
    </div>
  );
}
