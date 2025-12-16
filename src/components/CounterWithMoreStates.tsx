import {useState} from "react";
import Button from "./Button.tsx";

const CounterWithMoreStates = () => {
  const [count, setCount] = useState(0);
  const [lastAction, setLastAction] = useState("")
  const [time, setTime] = useState("")

  const getCurrentTime = () => new Date().toLocaleTimeString();

  const increaseCount = () => {
    setCount(count + 1);
    setLastAction("Increase");
    setTime(getCurrentTime());
  }

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setLastAction("Decrease");
      setTime(getCurrentTime());
    }
  }

  const resetCount = () => {
    setCount(0);
    setLastAction("Reset");
    setTime(getCurrentTime());
  }

  return (
    <>
      <h1 className="text-center text-2xl pt-8">Count is {count}</h1>
      <div className="text-center space-x-4 pt-8">
        <Button
          label="Increase"
          onClick={increaseCount}
        />
        <Button
          label="Decrease"
          onClick={decreaseCount}
          disabled={count === 0}
        />
        <Button
          label="Reset"
          onClick={resetCount}
          disabled={count === 0}
          addClass="bg-cf-dark-red"
        />
      </div>
      <p className="text-center text-cf-gray pt-8">
        Last action: <strong>{lastAction || "-"}</strong> at <strong>{time || "-"}</strong>
      </p>

    </>
  )
}

export default CounterWithMoreStates;