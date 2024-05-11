import "./styles/App.css";
import Header from "./widgets/Header/Header.jsx";
import Test from "./widgets/Test/Test.jsx";
import Slider from "./widgets/Slider/Slider.js";
import HowItWorks from "./widgets/HowItWorks/HowItWorks.js";

// import scroller1 from "./assets/img/scroller/1.png";
// import scroller2 from "./assets/img/scroller/2.png";
// import scroller3 from "./assets/img/scroller/3.png";

function App() {
  return (
    <div className="App">
      <Header />
      <p>hui</p>
      <Test></Test>
      <Slider />
      <HowItWorks />
    </div>
  );
}

export default App;
