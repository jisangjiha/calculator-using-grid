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
      ...calc,
      display: 0,
    });
  }

  function appendNumber(n) {
    if (calc.operator) {
      setCalc({
        ...calc,
        display: n,
        stored: calc.display,
      });
    } else {
      setCalc({
        ...calc,
        display: calc.display * 10 + n,
      });
    }
  }

  function setOperator(sign) {
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

  function setEqual() {
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
      <Signs setOperator={setOperator} setEqual={setEqual}></Signs>
    </div>
  );
}

export default App;
