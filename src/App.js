import React, { useState, useEffect } from "react";
import InputsComponent from "./InputsComponent";
import RapperBirthNames from "./RapperBirthNames";
import RapperStageNames from "./RapperStageNames";
import "./App.css";

function App() {
  const [rapper, setRapperData] = useState([]);
  const [loadingScreen, setLoadingScreen] = useState(false);

  useEffect(() => {
    try {
      fetch("http://localhost:8000/api/rappers")
        .then(res => res.json())
        .then(res => {
          setRapperData(res.Items);
        });
    } catch (err) {
      console.log("whyyyyyy", err);
    }
  }, []);

  // Functions
  return (
    <div className='app-container'>
      <div className='body-wrapper'>
        <h1>Rappers Info</h1>
        <div className='core-components-wrapper'>
          <InputsComponent className='inputs' />
          <div className='names-container'>
            <div className='birth-names'>
              <h2>Birth Name</h2>
              <RapperBirthNames rapper={rapper} />
            </div>
            <div className='stage-names'>
              {/* <h2>Stage Name</h2>
              <RapperStageNames rapper={rapper} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
