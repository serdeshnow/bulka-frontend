import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { PageLayout } from "./widgets/PageLayout/PageLayout.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { NotfoundPage } from "./pages/NotfoundPage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="registration" element={<RegistrationPage />} /> */}
          {/* <Route path="" element={} /> */}
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
