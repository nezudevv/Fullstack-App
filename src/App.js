import React, { useState, useEffect } from "react";
import InputsComponent from "./InputsComponent";
import RapperBirthNames from "./RapperBirthNames";
import "./App.css";

function App() {
  // Functions

  const [rapper, setRapperData] = useState([]);

  function getRapper() {
    try {
      fetch("http://localhost:8000/api/rappers")
        .then(res => res.json())
        .then(res => {
          setRapperData(res.Items);
        });
    } catch (err) {
      console.log("whyyyyyy", err);
    }
  }

  useEffect(() => {
    getRapper();
  }, []);

  console.log(rapper);

  return (
    <div className='app-container'>
      <div className='body-wrapper'>
        <h1>Rapper Info</h1>
        <div className='core-components-wrapper'>
          <InputsComponent className='inputs' getRapper={getRapper} />
          <div className='names-container'>
            <div className='birth-names'>
              <h2>Birth Name:</h2>

              {rapper.map(rap => (
                <div key={rap.id}>
                  <RapperBirthNames
                    birthName={rap.birthName}
                    id={rap.id}
                    getRapper={getRapper}
                  />
                </div>
              ))}
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
