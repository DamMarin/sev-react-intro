import {useState} from "react";
import Button from "./Button.tsx";

const CounterAdvanced = () => {

  const [state, setState] = useState({
    count: 0,
    lastAction: "",
    time: "",
  })

  const getCurrentTime = () => new Date().toLocaleTimeString();

  const increaseCount = () => {
    setState({
      count: state.count + 1,
      lastAction: "Increase",
      time: getCurrentTime(),
    })
  }

  const decreaseCount = () => {
    if (state.count > 0) {
      setState({
        count: state.count - 1,
        lastAction: "Decrease",
        time: getCurrentTime(),
      })
    }
  }

  const resetCount = () => {
    setState({
      count: 0,
      lastAction: "Reset",
      time: getCurrentTime(),
    })
  }

  return (
    <>
      <h1 className="text-center text-2xl pt-8">Count is {state.count}</h1>
      <div className="text-center space-x-4 pt-8">
        <Button
          label="Increase"
          onClick={increaseCount}
        />
        <Button
          label="Decrease"
          onClick={decreaseCount}
          disabled={state.count === 0}
        />
        <Button
          label="Reset"
          onClick={resetCount}
          disabled={state.count === 0}
          addClass="bg-cf-dark-red"
        />
      </div>
      <p className="text-center text-cf-gray pt-8">
        Last action: <strong>{state.lastAction || "-"}</strong> at <strong>{state.time || "-"}</strong>
      </p>
    </>
  )
}

export default CounterAdvanced;