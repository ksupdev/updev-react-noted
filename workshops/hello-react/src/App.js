import React from "react";

export default () => {
  const var1 = 0;
  const var2 = "hello";
  const var3 = true;
  const var4 = false;

  return (
    <div>
      <h1>Karoon {var1}</h1>
      <h1>Karoon {var2}</h1>
      <h1>Karoon {var3 && "yes"}</h1>
      <h1>Karoon {var4 && "yes"}</h1>
      {var3 && <h1>YES</h1>}
      {var4 ? <h1>YES</h1> : <h1>NO</h1>}
    </div>
  );
};
