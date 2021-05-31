import React from 'react';

function Actions({
  isActive,
  isPaused,
  handleStart,
  handleStop,
  handleLap,
  handleReset
}) {
  return (
    <div className="actions-group">
      <button className="action-button" disabled={isActive && !isPaused} onClick={handleStart}>START</button>
      <button className="action-button" disabled={!isActive || isPaused} onClick={handleStop}>STOP</button>
      <button className="action-button" disabled={!isActive || isPaused} onClick={handleLap}>LAP</button>
      <button className="action-button" disabled={!isActive} onClick={handleReset}>RESET</button>
    </div>
  );
}

export default React.memo(Actions);
