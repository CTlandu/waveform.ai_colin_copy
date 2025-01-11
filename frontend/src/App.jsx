import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
