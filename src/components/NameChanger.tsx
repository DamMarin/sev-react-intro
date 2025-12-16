import {useState} from "react";

const NameChanger = () => {
  const [name, setName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setName(e.target.value);
  }

  return (
    <>
      <h1 className="text-center text-xl mt-8">Hello, {name || "Stranger"}</h1>
      <div className="text-center mt-8">
        <input
          type="text"
          value={name}
          onChange={handleChange}
          className="border px-4 py-2"
          placeholder="What is your name?"
        />
      </div>
    </>
  )
}

export default NameChanger;