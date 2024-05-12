import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { PageLayout } from "./widgets/PageLayout/PageLayout.jsx";
import { CartPage } from "./pages/CartPage.jsx";
import { ChatPage } from "./pages/ChatPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { NotfoundPage } from "./pages/NotfoundPage.jsx";
import { PAAdminPage } from "./pages/PAAdminPage.jsx";
import { RegistrationPage } from "./pages/RegistrationPage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="admin" element={<PAAdminPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          {/* <Route path="" element={} /> */}
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
