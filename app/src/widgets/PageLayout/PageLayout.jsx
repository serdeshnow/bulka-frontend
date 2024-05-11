import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
