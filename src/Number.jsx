import "./Number.css";

function Number({ num, appendNumber }) {
  return (
    <button className={`number-${num}`} onClick={() => appendNumber(num)}>
      {num}
    </button>
  );
}
//<Number num={9} appendNumber={appendNumber} />
export default function Numbers({ appendNumber }) {
  return (
    <>
      <button className="nine">9</button>
      <button className="eight">8</button>
      <button className="seven">7</button>
      <button className="six">6</button>
      <button className="five">5</button>
      <button className="four">4</button>
      <button className="three">3</button>
      <button className="two">2</button>
      <button className="one">1</button>
      <button className="zero">0</button>
      <button className="double-zero">00</button>
      <button className="decimal-point">.</button>
    </>
  );
}
