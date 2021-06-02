import React from 'react';
import { getHours, getMinutes, getSeconds } from '../utils/formatTime';

function Timer({timer}) {
  console.log("Timer");
  return (
    <div className="timer-container">
      <div className="timer">{getHours(timer)}</div>
      :<div className="timer">{getMinutes(timer)}</div>
      :<div className="timer">{getSeconds(timer)}</div>
    </div>
  );
}

export default React.memo(Timer);