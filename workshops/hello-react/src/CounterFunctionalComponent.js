import React from "react";
import { useState } from "react";

export default function CounterFunctionalComponent() {
  // React Hook
  const [count, setCount] = useState(0);
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h1>Counter Functional Component 55</h1>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
