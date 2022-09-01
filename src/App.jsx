import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Number from "./Number.jsx";

function App() {
  return (
    <div className="container">
      <div className="result">result</div>
      <div className="backspace">backspace</div>
      <div className="clear">clear</div>
      <Number className="number" />
      <div className="sign">sign</div>
    </div>
  );
}

export default App;
