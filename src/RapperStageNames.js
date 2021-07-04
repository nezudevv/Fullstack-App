import React from "react";

function RapperStageNames({ rapper }) {
  return (
    <div>
      {rapper.map(r => (
        <div key={r.id}>
          <p className='stageName'>{r.stageName}</p>
        </div>
      ))}
    </div>
  );
}
export default RapperStageNames;
