import "./styles/App.css";
import HowItWorks from "./widgets/HowItWorks/HowItWorks.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <a href="/">Home</a>
        <> </>
        <a href="/">About</a>
        <> </>
        <a href="/">Catalog</a>
      </header>
      <div>
        <h2>some texxt</h2>
      </div>
      <HowItWorks />
    </div>
  );
}

export default App;
