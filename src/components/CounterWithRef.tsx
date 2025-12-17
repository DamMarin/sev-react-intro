import {useRef, useState} from "react";
import Button from "./Button.tsx";

const CounterWithRef = () => {
  const [count, setCount] = useState(0);
  const clickRef = useRef(0);

  const increaseCount = () => {
    setCount(count + 1);
    clickRef.current += 1;
    console.log("Ref: ", clickRef.current);
  }

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      clickRef.current -= 1;
      console.log("Ref: ", clickRef.current);
    }
  }

  const resetCount = () => {
    setCount(0);
    clickRef.current = 0;
    console.log("Ref: ", clickRef.current);
  }

  return (
    <>
      <div className="text-center text-2xl space-y-4 pt-8">
        <h1 >Count (state): {count}</h1>
        {/* eslint-disable-next-line react-hooks/refs */}
        <h2>Count (ref): {clickRef.current}</h2>
      </div>
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
    </>
  )
}

export default CounterWithRef;