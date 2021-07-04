import React from "react";
import DeleteButton from "./DeleteButton";

function RapperBirthNames({ rapper }) {
  function deleteButtonHandler(id) {
    console.log("test");
  }
  return (
    <div>
      {rapper.map(r => (
        <div className='name-delete' key={r.id}>
          <p className='birthName'>{r.birthName}</p>
          <DeleteButton deleteButton={deleteButtonHandler} />
        </div>
      ))}
    </div>
  );
}
export default RapperBirthNames;
