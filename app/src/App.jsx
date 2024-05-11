import "./styles/App.css";
import Header from "./widgets/Header/Header.jsx";
import { Routes, Route, Link } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage.jsx";
import { CatalogPage } from "./pages/CatalogPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { NotfoundPage } from "./pages/NotfoundPage.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <> </>
        <Link to="/about">About</Link>
        <> </>
        <Link to="/catalog">Catalog</Link>
      </header>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
      <div>
        <h2>some texxt</h2>
      </div>
    </div>
  );
}

export default App;
