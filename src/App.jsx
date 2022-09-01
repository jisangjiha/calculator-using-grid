import { useState } from "react";
import "./App.css";
import Number from "./Number.jsx";
import Sign from "./Sign.jsx";

function App() {
  return (
    <div className="container">
      <div className="result">result</div>
      <button className="backspace">▶</button>
      <button className="clear">C</button>
      <Number className="number" />
      <Sign className="sign" />
    </div>
  );
}

export default App;
