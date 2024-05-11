import "./styles/App.css";
import Header from "./widgets/Header/Header.jsx";
import Slider from "./widgets/Slider/Slider.js";
import HowItWorks from "./widgets/HowItWorks/HowItWorks.js";

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
