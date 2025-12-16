import Button from "./Button.tsx";
import {useCounter} from "../hooks/useCounter.ts";

const CounterWithCustomHook = () => {

  const { count, lastAction, time, increase, decrease, reset } = useCounter();

  return (
    <>
      <h1 className="text-center text-2xl pt-8">Count is {count}</h1>
      <div className="text-center space-x-4 pt-8">
        <Button
          label="Increase"
          onClick={increase}
        />
        <Button
          label="Decrease"
          onClick={decrease}
          disabled={count === 0}
        />
        <Button
          label="Reset"
          onClick={reset}
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

export default CounterWithCustomHook;