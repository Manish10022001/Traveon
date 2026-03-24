import "./App.css";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import TripDetail from "./pages/TripDetail";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip/:id" element={<TripDetail />} />
      </Routes>
    </>
  );
}

export default App;
