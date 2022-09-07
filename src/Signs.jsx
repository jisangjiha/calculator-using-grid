import "./Signs.css";

function Sign({ sign, setOperator }) {
  return <button onClick={(e) => setOperator(e.target.value)}>{sign}</button>;
}

export default function Signs() {
  return (
    <>
      <button className="squre-root">√</button>
      <Sign className="multiply" sign="*" />
      <button className="division">/</button>
      <button className="add">+</button>
      <button className="subtract">-</button>
      <button className="equal">=</button>
    </>
  );
}
