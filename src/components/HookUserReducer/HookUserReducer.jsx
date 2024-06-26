import React, { act, useReducer, useState } from "react";

const HookUserReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "mostrar":
        return { ...state, mostrar: !state.mostrar };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    mostrar: true,
  });

  return (
    <div>
      <h2>useReducer</h2>
      <button onClick={() => dispatch({ type: "mostrar" })}>{state.mostrar  ? 'esconder' : 'mostrar'}</button>
      {state.mostrar && <p>view</p>}
    </div>
  );
};

export default HookUserReducer;
