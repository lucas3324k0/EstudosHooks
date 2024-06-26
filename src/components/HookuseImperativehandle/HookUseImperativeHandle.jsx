import React, { useRef } from "react";
import SomeComponents from "./SomeComponents";

const HookUseImperativeHandle = () => {
  const componentRef = useRef();

  return (
    <div>
      <h2>useImperativeHandle</h2>
      <SomeComponents ref={componentRef}/>
      <button onClick={() => componentRef.current.validate()}>Validate</button>
    </div>
  );
};

export default HookUseImperativeHandle;
