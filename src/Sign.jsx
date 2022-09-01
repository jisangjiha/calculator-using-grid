import "./Sign.css";

export default function Sign(x, y) {
  return (
    <>
      <button className="root">√</button>
      <button className="multiply" onClick={(x, y) => x * y}>
        *
      </button>
      <button className="division" onClick={(x, y) => x / y}>
        /
      </button>
      <button className="plus" onClick={(x, y) => x + y}>
        +
      </button>
      <button className="minus" onClick={(x, y) => x - y}>
        -
      </button>
      <button className="equal">=</button>
    </>
  );
}
