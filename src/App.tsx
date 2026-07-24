import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="position-relative">
        <Navbar />
        <Hero />
      </div>
      <Services />
      <About />
      <Footer />
    </>
  );
}

export default App;
