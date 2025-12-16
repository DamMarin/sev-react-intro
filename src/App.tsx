import Layout from "./components/layout/Layout.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import Card from "./components/Card.tsx";
// import Counter from "./components/Counter.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
import NameChanger from "./components/NameChanger.tsx";

function App() {
  // const title = "Is an Arrow Functional Component!";

  return (
    <>
      <Layout>

        {/*<FunctionalComponent />*/}
        {/*<ArrowFunctionalComponent />*/}
        {/*<ClassComponent />*/}
        {/*<ArrowFunctionalComponentWithProps title={title} />*/}

        {/*<Card title={title}>*/}
        {/*  <div>*/}
        {/*    <h2>titleSecond</h2>*/}
        {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum exercitationem*/}
        {/*      id qui quisquam quos repellendus tempore temporibus tenetur ullam voluptatem?</p>*/}
        {/*  </div>*/}
        {/*</Card>*/}
        {/*  /!* MAIN CONTENT*!/*/}
        {/*  <main className="container mx-auto p-8">*/}
        {/*    <h2>Main content</h2>*/}
        {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, tempora!</p>*/}
        {/*    <FunctionalComponent />*/}
        {/*  </main>*/}

        {/*<Counter />*/}
        {/*<CounterWithMoreStates />*/}
        {/*<CounterAdvanced />*/}
        <NameChanger />


      </Layout>
    </>
  )
}

export default App