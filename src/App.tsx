import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ClassComponent from "./components/ClassComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";


function App() {

  const title = "Is an Arrow Functional Component!";

  return (
    <>
      <FunctionalComponent />
      <ArrowFunctionalComponent />
      <ClassComponent />
      <ArrowFunctionalComponentWithProps title={title} />
    </>
  )
}

export default App