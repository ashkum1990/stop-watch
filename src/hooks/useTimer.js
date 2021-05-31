import { useState, useRef, useCallback } from 'react';
import { getHours, getMinutes, getSeconds } from '../utils/formatTime'

function useTimer(initialValue = 0) {
  const [timer, setTimer] = useState(initialValue);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [laps, setLaps] = useState([]);
  const countRef = useRef(null);

  const handleStart = useCallback(() => {
    countRef.current = setInterval(() => {
      setTimer( timer => timer + 1)
    }, 1000)
    setIsActive(true);
    setIsPaused(false)
  }, [countRef])

  const handleStop = useCallback(() => {
    clearInterval(countRef.current);
    setIsPaused(true)
  }, [countRef]);

  const handleReset = useCallback(() => {
    clearInterval(countRef.current);
    setTimer(initialValue);
    setIsActive(false);
    setIsPaused(false)
    setLaps([]);
  }, [countRef, initialValue]);

  
  const handleLap = useCallback(() => {
    const lapTime = `${getHours(timer)}:${getMinutes(timer)}:${getSeconds(timer)}`;
    setLaps([lapTime, ...laps]);
  }, [laps, timer])

  return {
    timer,
    laps,
    isActive,
    isPaused,
    handleStart,
    handleStop,
    handleReset,
    handleLap
  }
}

export default useTimer;