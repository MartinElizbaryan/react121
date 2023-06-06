import { useState } from "react";
import { greaterOrEqualZero } from "./helpers.js";
// import * as x from "./helpers.js";

const App = () => {
  const [count, setCount] = useState(7);
  const [title, setTitle] = useState("Count");
  const arr = [1, 2, 3];

  const handleClick = (value) => {
    const result = count + value;

    // if (greaterOrEqualZero(result)) {
    //   setCount(result);
    // } else {
    //   setCount(0);
    // }

    setCount(greaterOrEqualZero(result) ? result : 0);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <button style={{ marginRight: 4 }} onClick={() => handleClick(1)}>
        +1
      </button>

      <button style={{ marginRight: 4 }} onClick={() => handleClick(5)}>
        +5
      </button>

      <button style={{ marginRight: 4 }} onClick={() => handleClick(10)}>
        +10
      </button>

      <button style={{ marginRight: 4 }} onClick={() => handleClick(-5)}>
        -5
      </button>

      <input style={{ marginRight: 4 }} value={title} onChange={handleChange} />

      <br />
      <span>
        {title}: {count}
        <br />
        {arr.map((val) => {
          return (
            <div>
              <h1>{val}</h1>
              <h2>{val}</h2>
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default App;

// = useState(100)
// [100, fn]
