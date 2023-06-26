import { useState, useMemo, useCallback } from "react"; // hook
import Result from "./Result";

function App() {
  console.log("Render from App");
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [isShown, setIsShown] = useState(true);

  const addPoint = useCallback(() => {
    setNumber(number + 1);
  }, [number]);
  const addPoint2 = useCallback(() => {
    setNumber2(number2 + 1);
  }, [number2]);
  const addPoint3 = useCallback(() => {
    setNumber3(number3 + 1);
  }, [number3]);
  const result = useMemo(() => {
    return number + number2;
  }, [number, number2]);

  const toggleResult = () => {
    setIsShown(!isShown);
  };

  return (
    <div>
      <button onClick={addPoint}>Add +</button>
      <button onClick={addPoint2}>Add2 +</button>
      <button onClick={addPoint3}>Add3 +</button>
      <button onClick={toggleResult}>Toggle</button>

      <br />
      <br />

      <div>App Component - {number}</div>
      <div>{number2}</div>
      <div>{number3}</div>

      <br />

      <div>{result}</div>

      {isShown && <Result number={number} />}
    </div>
  );
}

export default App;
