import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Agence from "./Pages/Agence";
import Projects from "./Pages/Projects";
import "./App.css";
import Navbar from "./Components/Navigation/Navbar";


function App() {

  return (
    <>
   <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Agence" element={<Agence />} />
          <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;