import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import TeamPage from "./Pages/TeamPage";
import Workshops from "./Pages/Workshops";
import RegistrationPage from "./Pages/RegistrationPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/register" element={<RegistrationPage />} />
          {/* Add catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
