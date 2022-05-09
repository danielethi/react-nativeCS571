import React, { useState, useMemo } from "react";

export default function Sum() {
  const [last, setLast] = useState(10);

  const calculate = (last) => {
    let sum = 0;
    for (let i = 1; i <= last; i++) {
        sum+=i
    }
   return sum
  };

  const handleChange = (e) => {
    let value = e.target.value;
    setLast(value);
  };

  const sum = useMemo(() => {
      return calculate(last)
  }, [last]);

  return (
    <div>
      <React.Fragment>
        <p>Calculate Sum</p>
        <input value={last} onChange={handleChange} />
      </React.Fragment>
    </div>
  );
}
