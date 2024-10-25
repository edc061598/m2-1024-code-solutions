import { useState } from 'react';
import './StopWatch.css';
import { FaPause, FaPlay } from 'react-icons/fa';

export function StopWatch() {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>(
    undefined
  );
  const [myTime, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleClick() {
    if (isPlaying) {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(undefined);
      }
      setIsPlaying(false);
    } else {
      const id = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
    }
    setIsPlaying(!isPlaying);
  }
  const resetTime = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
    }
    setTime(0);
    setIsPlaying(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`;
  };

  return (
    <div className="stopwatch-wrapper">
      <div className="watch-face" onClick={resetTime}>
        {formatTime(myTime)}
      </div>

      <button onClick={handleClick} className="stopwatch-button">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
}
