import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LoadingAnimation from "./Components/Animations/LoadingAnimation.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <LoadingAnimation >
      <App />
    </LoadingAnimation >
    </BrowserRouter>
  </React.StrictMode>
);