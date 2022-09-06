import { useState } from "react";
import "./App.css";
import Numbers from "./Numbers.jsx";
import Sign from "./Sign.jsx";

function App() {
  const [calc, setCalc] = useState({ display: 0, operand: null, stored: null });

  function appendNumber(n) {
    setCalc({
      ...calc,
      display: calc.display * 10 + n,
    });
  }

  return (
    <div className="container">
      <div className="outcome">{calc.display}</div>
      <button className="backspace">▶</button>
      <button className="clear">C</button>
      <Numbers className="number" appendNumber={appendNumber}></Numbers>
      <Sign className="sign"></Sign>
    </div>
  );
}

export default App;
