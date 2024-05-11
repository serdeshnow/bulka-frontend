import Header from "../Header/Header.jsx";
import SliderContainer from "../SliderContainer/SliderContainer.jsx";
import HowItWorks from "../HowItWorks/HowItWorks.jsx";
import AboutContainer from "../AboutContainer/AboutContainer.jsx";
import CatalogContainer from "../CatalogContainer/CatalogContainer.jsx";
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
