import React, { useState, useEffect } from "react";
import InputsComponent from "./InputsComponent";
import RapperBirthNames from "./RapperBirthNames";
import RapperStageNames from "./RapperStageNames";
import "./App.css";

function App() {
  const [rapper, setRapperData] = useState([]);

  useEffect(() => {
    try {
      async function getData() {
        const data = await fetch("http://localhost:8000/api/rappers").then(
          res => res.json()
        );
        setRapperData(data.Items);
        return data;
      }
      getData();
    } catch (err) {
      console.log("whyyyyyy", err);
    }
  }, []);

  // Functions
  return (
    <div>
      <div className='body-wrapper'>
        <h1>Rappers Info</h1>
        <div className='core-components-wrapper'>
          <InputsComponent />
          <div className='names-container'>
            <div className='birth-names'>
              <h2>Birth Name</h2>
              <RapperBirthNames rapper={rapper} />
            </div>
            <div className='stage-names'>
              <h2>Stage Name</h2>
              <RapperStageNames rapper={rapper} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
