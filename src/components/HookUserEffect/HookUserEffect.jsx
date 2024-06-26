import React, { useEffect, useState } from "react";

const HookUserEffect = () => {
  useEffect(() => {
    console.log("Estou sendo executado...");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + number);
  };

  // array dependencias vazio
  useEffect(() => {
    console.log("Serei executado apenas uma vez...");
  }, []);

  return (
    <>
      <div>
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}> resultado</button>
      </div>
    </>
  );
};

export default HookUserEffect;
