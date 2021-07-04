import React from "react";

function RapperBirthNames({ rapper }) {
  function deleteButtonHandler(id) {
    console.log("test");
  }
  return (
    <div>
      {rapper.map(r => (
        <div className='name-delete' key={r.id}>
          <p className='birthName'>{r.birthName}</p>
          <button onClick={() => deleteButtonHandler(r.id)}>X</button>
        </div>
      ))}
    </div>
  );
}
export default RapperBirthNames;
