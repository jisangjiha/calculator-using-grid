import { useState } from "react";
import "./App.css";
import Number from "./Number.jsx";
import Sign from "./Sign.jsx";

function App() {
  const [input, setInput] = useState({ x: "", y: "" });

  function calculate(x, y) {
    input.x = x;
    input.y = y;
  }

  return (
    <div className="container">
      <div className="result">result</div>
      <button className="backspace">▶</button>
      <button className="clear">C</button>
      <Number className="number">{calculate()}</Number>
      <Sign className="sign"></Sign>
    </div>
  );
}

export default App;
