import React from 'react';

function Laps({laps}) {
  let lapKeys = laps.length - 1;
  return (
    <ul className="lap-list">
      {laps.map( lap => 
        <li className="lap-list-item" key={`laps-${lapKeys--}`}>{lap}</li>
      )}
    </ul>
  );
}

export default React.memo(Laps);