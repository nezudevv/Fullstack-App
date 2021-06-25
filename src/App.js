import React, { useState } from "react";
import InputsComponent from "./InputsComponent";

function App() {
  const [rapName, setRapName] = useState("");
  const [currentName, setCurrentName] = useState("");
  // Functions test

  async function onClickHandler() {
    try {
      const res = await fetch(`http://localhost:8000/api/rappers/${rapName}`);
      const data = await res.json();
      setCurrentName(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  function inputHandler(e) {
    setRapName(e.target.value);
  }

  return (
    <div>
      <h1>Get Rapper's BirthName</h1>
      <h2>Result: {currentName.birthName}</h2>
      <input type='text' onInput={inputHandler} />
      <button onClick={onClickHandler}>Click Me</button>
      <InputsComponent />
    </div>
  );
}

export default App;
