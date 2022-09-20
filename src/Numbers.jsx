import "./Numbers.css";

function Number({ num, appendNumber }) {
  return (
    <button className={`number-${num}`} onClick={() => appendNumber(num)}>
      {num}
    </button>
  );
}

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "00"];

export default function Numbers({ appendNumber }) {
  return (
    <>
      {numbers.map((n) => (
        <Number key={n} num={n} appendNumber={appendNumber} />
      ))}
      <button className="decimal-point">.</button>
    </>
  );
}
