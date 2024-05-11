import SliderContainer from "../widgets/Containers/SliderContainer/SliderContainer";
import HowItWorks from "../widgets/Containers/HowItWorks/HowItWorks";
import AboutContainer from "../widgets/Containers/AboutContainer/AboutContainer";
import CatalogContainer from "../widgets/Containers/CatalogContainer/CatalogContainer";

export const HomePage = () => {
  return (
    <>
      <SliderContainer />
      <HowItWorks />
      <AboutContainer />
      <CatalogContainer />
    </>
  );
};
