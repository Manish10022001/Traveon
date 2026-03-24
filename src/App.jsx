import "./App.css";
import Destination from "./components/Destination";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Testimonials from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Destination />
      <Experience />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
