import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <>
      {/*  HEADER COMPONENT  */}
      <Header />

      {/*  MAIN CONTENT  */}
      <div className="container mx-auto min-h-[95vh] pt-24">
        {children}
      </div>

      {/*  FOOTER COMPONENT  */}
      <Footer />
    </>
  )
}

export default Layout;