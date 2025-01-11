import LandingPage from "./LandingPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow"></main>
      <Footer />
    </div>
  );
}

export default App;
