import React, { useEffect, useLayoutEffect, useState } from "react";

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("algum nome");

  useEffect(() => {
    console.log("2");
    setName("Mudou novamente");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("Outro nome");
  }, []);

  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;
