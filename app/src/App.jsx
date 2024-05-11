import "./styles/App.css";
import Header from "./widgets/Header/Header.jsx";
import Slider from "./widgets/Slider/Slider.jsx";
import HowItWorks from "./widgets/HowItWorks/HowItWorks.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <HowItWorks />
    </div>
  );
}

export default App;
