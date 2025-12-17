import Button from "./Button.tsx";
import {useEffect, useRef, useState} from "react";

const PreviousValue = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number | null>(null);

  useEffect(() => {
    prevCountRef.current = count;
    console.log("prevCountRef: ", prevCountRef.current);
  }, [count]);

  return (
    <>
      <div className="text-center pt-12">
        <h1 className="text-2xl mb-4">Value: {count}</h1>
        {/* eslint-disable-next-line react-hooks/refs */}
        <h2 className="text-xl mb-6">Previous Value: {prevCountRef.current ?? "-"}</h2>
        <Button
          onClick={() => setCount((prev) => prev + 1)}
          label={"Increase"}
        />
      </div>
    </>
  )
}

export default PreviousValue;