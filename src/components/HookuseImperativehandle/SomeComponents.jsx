import React, { forwardRef, useImperativeHandle, useRef } from "react";

// Define o componente usando forwardRef para receber a ref do pai
const SomeComponents = forwardRef((props, ref) => {
  const localInputRef = useRef(); // Cria uma referência local para o input

  // Customiza a instância exposta ao componente pai
  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if (localInputRef.current.value.length > 3) {
          localInputRef.current.value = ""; // Limpa o input se houver mais de 3 caracteres
        }
      },
    };
  });

  return (
    <div>
      <p>Insira no máximo 3 caracteres</p>
      <input type="text" ref={localInputRef} /> {/* Atribui a ref local ao input */}
    </div>
  );
});

export default SomeComponents;
