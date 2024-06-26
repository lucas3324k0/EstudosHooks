import { useState } from "react";

const HookUseState = () => {
  let userName = "Joao";
  const [name, setName] = useState("Matheus");

  const changeNames = () => {
    userName = "Joao da silva";

    setName("matheus henrique");
  };

  // useState inputs
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h2>useState</h2>
      <p>Variavel: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>

      {/* useSatte input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" />
      </form>

      <p>Voce tem {age} anos.</p>
      <hr />
    </div>
  );
};

export default HookUseState;
