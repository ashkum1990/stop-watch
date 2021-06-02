import React from 'react';
import useTimer from '../hooks/useTimer'
import './StopWatch.css';
import Timer from './Timer';
import Actions from './Actions';
import Laps from './Laps';

function StopWatch({title}) {
  const {timer, laps, isActive, isPaused, handleStart, handleStop, handleReset, handleLap} = useTimer();

  return (
    <div className="stop-watch">
      <h2 className="watch-header">{title}</h2>
      <div className="watch-container">
        <Timer timer={timer}/>
        <Actions 
          isActive={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handleStop={handleStop}
          handleLap={handleLap}
          handleReset={handleReset}
        />
        {laps.length > 0 && <Laps laps={laps}/>}
      </div>
    </div>
  );
}

export default StopWatch;
