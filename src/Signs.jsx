import "./Signs.css";

function Operator(sign, setOperator) {
  return <button onClick={() => setOperator}>{sign}</button>;
}

export default function Signs({ setOperator }) {
  return (
    <>
      <button className="squre-root">√</button>
      <button className="multiply" onClick={() => setOperator("multiply")}>
        *
      </button>
      <button className="divide" onClick={() => setOperator("divide")}>
        /
      </button>
      <button className="add" onClick={() => setOperator("add")}>
        +
      </button>
      <button className="subtract" onClick={() => setOperator("substract")}>
        -
      </button>
      <button className="equal">=</button>
    </>
  );
}
