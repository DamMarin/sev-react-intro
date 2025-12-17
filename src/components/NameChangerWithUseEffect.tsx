import {useEffect, useState} from "react"

const NameChangerWithUseEffect = () => {
  const [name, setName] = useState("")

  useEffect(() => {
    document.title = name ? `Hello, ${name}!` : "Hello, Stranger!";
    console.log("name", name);
  }, [name]);

  return (
    <>
      <h1 className="text-center text-xl mt-8">Hello, {name || "Stranger"}!</h1>
      <div className="text-center mt-8">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="border px-4 py-2"
        />
      </div>
    </>
  )
}

export default NameChangerWithUseEffect;