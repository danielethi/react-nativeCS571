import React from "react";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h3>Counter Using Functional Hooks</h3>
      <p>Counter:{counter}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
