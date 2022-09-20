import "./Signs.css";

function Operator({ sign, setOperator, displaySign }) {
  return (
    <button className={sign} onClick={() => setOperator(sign)}>
      {displaySign}
    </button>
  );
}

const binaryOperators = [
  { sign: "multiply", displaySign: "*" },
  { sign: "divide", displaySign: "/" },
  { sign: "add", displaySign: "+" },
  { sign: "subtract", displaySign: "-" },
];

export default function Signs({ setOperator, handleEqual }) {
  return (
    <>
      {binaryOperators.map(({ sign, displaySign }) => (
        <Operator
          key={sign}
          sign={sign}
          displaySign={displaySign}
          setOperator={setOperator}
        />
      ))}
      <Operator sign={"squre-root"} displaySign={"√"} />
      <button className="equal" onClick={() => handleEqual()}>
        =
      </button>
    </>
  );
}
