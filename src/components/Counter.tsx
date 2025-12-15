import {useState} from "react";
import Button from "./Button.tsx";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const resetCount = () => {
    setCount(0);
  }

  return (
    <>
      <h1 className="text-center text-2xl pt-8">Count is {count}</h1>
      <div className="text-center space-x-4 pt-8">
        {/*<button*/}
        {/*  className="bg-cf-dark-gray text-white px-4 py-2"*/}
        {/*  onClick={increaseCount}*/}
        {/*>*/}
        {/*  Increase*/}
        {/*</button>*/}
        {/*<button*/}
        {/*  className="bg-cf-dark-gray disabled:bg-gray-400 text-white px-4 py-2"*/}
        {/*  onClick={decreaseCount}*/}
        {/*  disabled={count === 0}*/}
        {/*>*/}
        {/*  Decrease*/}
        {/*</button>*/}
        {/*<button*/}
        {/*  className="bg-cf-dark-red disabled:bg-gray-400 text-white px-4 py-2"*/}
        {/*  onClick={resetCount}*/}
        {/*  disabled={count === 0}*/}
        {/*>*/}
        {/*  Reset*/}
        {/*</button>*/}
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

export default Counter;