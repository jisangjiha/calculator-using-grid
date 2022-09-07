import { useState } from "react";
import "./App.css";
import Numbers from "./Numbers.jsx";
import Signs from "./Signs.jsx";

function App() {
  const [calc, setCalc] = useState({
    display: 0,
    operator: null,
    stored: null,
  });

  function appendNumber(n) {
    setCalc({
      ...calc,
      display: calc.display * 10 + n,
    });
  }

  function deleteNumber() {
    setCalc({
      ...calc,
      display: Math.floor(calc.display / 10),
    });
  }

  return (
    <div className="container">
      <div className="outcome">{calc.display}</div>
      <button className="backspace" onClick={deleteNumber}>
        ▶
      </button>
      <button className="clear">C</button>
      <Numbers className="number" appendNumber={appendNumber}></Numbers>
      <Signs className="sign"></Signs>
    </div>
  );
}

export default App;
