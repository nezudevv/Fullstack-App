import React, { useState, useEffect } from "react";
import InputsComponent from "./InputsComponent";

function App() {
  const [rapper, setRapperData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/info")
      .then(res => res.json())
      .then(res => setRapperData(res));
  }, []);

  // Functions
  console.log(rapper);
  return (
    <div>
      <h1>Rappers Info</h1>
      {rapper.map(r => (
        <div>{r.birthName}</div>
      ))}
      <InputsComponent />
    </div>
  );
}

export default App;
