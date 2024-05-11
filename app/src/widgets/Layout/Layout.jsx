import Header from "../Header/Header.jsx";
import SliderContainer from "../Containers/SliderContainer/SliderContainer.jsx";
import HowItWorks from "../Containers/HowItWorks/HowItWorks.jsx";
import AboutContainer from "../Containers/AboutContainer/AboutContainer.jsx";
import CatalogContainer from "../Containers/CatalogContainer/CatalogContainer.jsx";
import Footer from "../Footer/Footer.jsx";

export const Layout = () => {
  return (
    <>
      <Header />
      <SliderContainer />
      <HowItWorks />
      <AboutContainer />
      <CatalogContainer />
      <Footer />
    </>
  );
};
