import {useEffect, useState} from "react";

const CountDown = () => {
  const initialValue: number = 100;

  const [seconds, setSeconds] = useState(initialValue);
  const [running, setRunning] = useState(false);

  const handleStart = () => {
    setRunning(true);
  }
  const handleStop = () => {
    setRunning(false);
  }
  const handleReset = () => {
    setSeconds(initialValue);
    setRunning(false);
  }

  useEffect(() => {
    if (!running || seconds <=0) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval)
            return 0;
          }
          return prev - 1;
        }
      );
    }, 1000) // 1000ms -> 1s

    return () => clearInterval(interval)

  }, [running, seconds]);

  return (
    <>
      <div className="text-center pt-12">
        <h2 className="text-2xl mt-8">
          Countdown: {seconds} seconds
        </h2>
        <div className="space-x-2 mt-8">
          <button
            onClick={handleStart}
            className="px-4 py-2 bg-green-500 disabled:bg-geen-200 text-white rounded"
            disabled={running || seconds === 0}
          >
            Start
          </button>
          <button
            onClick={handleStop}
            className="px-4 py-2 bg-red-500 disabled:bg-red-200 text-white rounded"
            disabled={!running}
          >
            Stop
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default CountDown;