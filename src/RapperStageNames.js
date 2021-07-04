import React, { useState } from "react";

function RapperStageNames({ rapper }) {
  return (
    <div>
      {rapper.map(r => (
        <div key={r.id}>
          <p>{r.stageName}</p>
        </div>
      ))}
    </div>
  );
}
export default RapperStageNames;
