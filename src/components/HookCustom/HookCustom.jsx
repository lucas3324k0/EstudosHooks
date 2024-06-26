import React, { useState } from "react";
import { usePrevius } from "../../hooks/usePrevius";

const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const previousValue = usePrevius(number);

  return (
    <div>
      <h2>Custom Hooks</h2>
      <p>Atual: {number}</p>
      <p>Anterior: {previousValue}</p>
      <button onClick={() => setNumber(Math.random)}>Alterar</button>
    </div>
  );
};

export default HookCustom;
