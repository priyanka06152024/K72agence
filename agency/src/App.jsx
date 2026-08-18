import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Agence from "./Pages/Agence";
import "./App.css";


function App() {

  return (
    <>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Agence" element={<Agence />} />
      </Routes>
    </>
  );
}

export default App;