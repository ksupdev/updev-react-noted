import React, { useState } from "react";

export default () => {
  let var1 = 0;
  const var2 = "hello";
  const var3 = true;
  const var4 = false;

  // Hook
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Var1 {var1}</h1>
      <h1>Karoon {var2}</h1>
      <h1>Karoon {var3 && "yes"}</h1>
      <h1>Karoon {var4 && "yes"}</h1>
      {var3 && <h1>YES</h1>}
      {var4 ? <h1>YES</h1> : <h1>NO</h1>}
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Add (Count value)
      </button>
    </div>
  );
};
