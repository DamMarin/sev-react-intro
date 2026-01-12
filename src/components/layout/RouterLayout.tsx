import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import {Outlet} from "react-router";

const RouterLayout = () => {
  return (
    <>
      {/*  HEADER COMPONENT  */}
      <Header />

      {/*  MAIN CONTENT  */}
      <div className="container mx-auto min-h-[95vh] pt-24">
        <Outlet />
      </div>

      {/*  FOOTER COMPONENT  */}
      <Footer />
    </>
  )
}

export default RouterLayout;