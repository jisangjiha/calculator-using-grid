import { useState } from "react";
import "./App.css";
import Numbers from "./Numbers.jsx";
import Signs from "./Signs.jsx";
import { operate } from "./utils";

function App() {
  const [calc, setCalc] = useState({
    display: 0,
    operator: null,
    stored: null,
  });

  function deleteNumber() {
    setCalc({
      ...calc,
      display: Math.floor(calc.display / 10),
    });
  }

  function clear() {
    setCalc({
      display: 0,
      operator: null,
      stored: null,
    });
  }

  function appendNumber(n) {
    if (calc.operator && calc.stored === null) {
      setCalc({
        ...calc,
        display: +n,
        stored: calc.display,
      });
    } else {
      setCalc({
        ...calc,
        display: +(calc.display + n),
      });
    }
  }

  function handleOperator(sign) {
    if (calc.stored) {
      setCalc({
        display: operate(calc.stored, calc.display, calc.operator),
        operator: sign,
        stored: null,
      });
    } else {
      setCalc({
        ...calc,
        operator: sign,
      });
    }
  }

  function handleEqual() {
    setCalc({
      display: operate(calc.stored, calc.display, calc.operator),
      operator: null,
      stored: null,
    });
  }

  return (
    <div className="container">
      <div className="outcome">{calc.display}</div>
      <button className="backspace" onClick={deleteNumber}>
        ▶
      </button>
      <button className="clear" onClick={clear}>
        C
      </button>
      <Numbers appendNumber={appendNumber}></Numbers>
      <Signs setOperator={handleOperator} handleEqual={handleEqual}></Signs>
    </div>
  );
}

export default App;
