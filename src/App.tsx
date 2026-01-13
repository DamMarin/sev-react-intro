// import Layout from "./components/layout/Layout.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import Card from "./components/Card.tsx";
// import Counter from "./components/Counter.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import {useEffect} from "react";
// import NameChangerWithUseEffect from "./components/NameChangerWithUseEffect.tsx";
// import WindowSize from "./components/WindowSize.tsx";
// import Timer from "./components/Timer.tsx";
// import CountDown from "./components/CountDown.tsx";
// import FocusInput from "./components/FocusInput.tsx";
// import CounterWithRef from "./components/CounterWithRef.tsx";
import PreviousValue from "./components/PreviousValue.tsx";
// import {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChanger from "./components/NameChanger.tsx";
import UserPage from "./pages/UserPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import RouterLayout from "./components/layout/RouterLayout.tsx";
import MultiFieldForm from "./components/MultiFieldForm.tsx";
import MultiFieldFormWithValidation from "./components/MultiFieldFormWithValidation.tsx";

function App() {
  // const title = "Is an Arrow Functional Component!";

  // useEffect(setup, [deps]);
  // useEffect(setup, []);
  // useEffect(setup)
  // useEffect(() => {
  //   console.log("App mounted 0");
  // }, [dep1, dep2]);
  //
  // useEffect(() => {
  //   console.log("App mounted 1");
  // }, []); //θα τρέξει μόνο μια φορά όταν το component φορτώνει
  //
  // useEffect(() => {
  //   console.log("App mounted 2");
  // });
  // useEffect(() => {
  //   //setup (runs side-effect)
  //   console.log("App mounted");
  //   return () => {
  //     // cleanup (clean up side-effect)
  //     console.log("Cleanup");
  //   }
  // }, []);

  // useEffect(() => {
  //   history.pushState({page:1}, "", "/page");
  //
  //   history.replaceState({page:2}, "", "/page2");
  //
  //   window.onpopstate = (event) => {
  //     console.log("popstate: ", event.state);
  //   }
  // }, []);






  return (
    <>
      {/*<Layout>*/}

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
        {/*<NameChanger />*/}
        {/*<CounterWithCustomHook />*/}

        {/*<NameChangerWithUseEffect />*/}
        {/*<WindowSize />*/}
        {/*<Timer />*/}
        {/*<CountDown />*/}
        {/*<FocusInput />*/}
        {/*<CounterWithRef />*/}
        {/*<PreviousValue />*/}

      {/*</Layout>*/}

      <BrowserRouter>
        <Routes>

          <Route element={<RouterLayout/>}>

            {/*<Route path="/" element={<HomePage />} />*/}
            <Route index element={<HomePage />} />

            {/*<Route path="examples/name-changer" element={<NameChanger />} />*/}
            {/*<Route path="examples/previous-value" element={<PreviousValue />} />*/}
            <Route path="examples">
              <Route index element={<HomePage/>}/>
              <Route path="name-changer" element={<NameChanger />} />
              <Route path="previous-value" element={<PreviousValue />} />
              <Route path="multi-field-form" element={<MultiFieldForm />} />
              <Route path="multi-field-form-with-validation" element={<MultiFieldFormWithValidation />} />
            </Route>

            <Route path="optional?/name-changer" element={<NameChanger />} />
            {/*<Route path="files/*" element={<File/>}/> /!* catch all *!/*/}

            <Route path="users/:userId" element={<UserPage />} /> {/* id =15 -> /users/15 */}
            <Route path="search" element={<SearchPage />} />
            {/*  https://www.skroutz.gr/c/40/kinhta-thlefwna.html */}
            {/* <Route path="c/:categoryId/:categorySlug" element={<CategoryPage/>} />*/}

          </Route>

          <Route path="*" element={<NotFoundPage/>}/> {/* catch all */}

        </Routes>
      </BrowserRouter>

      {/*// /examples/name-changer*/}
      {/*// /examples/previous-value*/}

    </>
  )
}

export default App