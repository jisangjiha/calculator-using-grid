import "./Number.css";

function Number({ num, appendNumber }) {
  return (
    <button className={`number-${num}`} onClick={() => appendNumber(num)}>
      {num}
    </button>
  );
}

export default function Numbers({ appendNumber }) {
  return (
    <>
      <Number num={9} appendNumber={appendNumber} />
      <Number num={8} appendNumber={appendNumber} />
      <Number num={7} appendNumber={appendNumber} />
      <Number num={6} appendNumber={appendNumber} />
      <Number num={5} appendNumber={appendNumber} />
      <Number num={4} appendNumber={appendNumber} />
      <Number num={3} appendNumber={appendNumber} />
      <Number num={2} appendNumber={appendNumber} />
      <Number num={1} appendNumber={appendNumber} />
      <Number num={0} appendNumber={appendNumber} />
      <button className="double-zero">00</button>
      <button className="decimal-point">.</button>
    </>
  );
}
