import React, { useState } from "react";

function RapperBirthNames({ rapper }) {
  return (
    <div>
      {rapper.map(r => (
        <div key={r.id}>
          <p>{r.birthName}</p>
        </div>
      ))}
    </div>
  );
}
export default RapperBirthNames;
