import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ClassComponent from "./components/ClassComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import Card from "./components/Card.tsx";

function App() {

  const title = "Is an Arrow Functional Component!";

  return (
    <>
      <FunctionalComponent />
      <ArrowFunctionalComponent />
      <ClassComponent />
      <ArrowFunctionalComponentWithProps title={title} />

      <Card title={title}>
        <div>
          <h2>titleSecond</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum exercitationem
            id qui quisquam quos repellendus tempore temporibus tenetur ullam voluptatem?</p>
        </div>
      </Card>
    </>
  )
}

export default App