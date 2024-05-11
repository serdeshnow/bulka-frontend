import "./styles/App.css";
import Header from "./widgets/Header/Header.jsx";
import Slider from "./widgets/Slider/Slider.jsx";
import HowItWorks from "./widgets/HowItWorks/HowItWorks.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Catalog</a>
      </header>
      <h1>some texxt</h1>
      <Header />
      <Slider />
      <HowItWorks />
    </div>
  );
}

export default App;
