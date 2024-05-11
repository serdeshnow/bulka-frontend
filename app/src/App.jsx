import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage.jsx";
import { CatalogPage } from "./pages/CatalogPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { NotfoundPage } from "./pages/NotfoundPage.jsx";
import { Layout } from "./widgets/Layout/Layout.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
