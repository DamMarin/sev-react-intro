import {useEffect, useState} from 'react';

const WindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {

    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", handleResize);
    console.log("setup");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("cleanup");
    }

  },[size])

  return (
    <>
      <div className="text-center mt-12">
        <h1 className="text-cf-dark-gray text-2xl my-8">
          Window size: {size.width} x {size.height}
        </h1>
        <p className="text-cf-gray">Resize the window and watch it update!</p>
      </div>
    </>
  )
}

export default WindowSize;