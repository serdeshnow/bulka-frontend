import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>2024</p>
      </footer>
    </>
  );
};
