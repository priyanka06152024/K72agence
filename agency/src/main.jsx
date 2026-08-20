import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LoadingAnimation from "./Components/Animations/LoadingAnimation.jsx";
import NavContext from './context/NavContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingAnimation>
        <NavContext>
          <App />
        </NavContext>
      </LoadingAnimation>
    </BrowserRouter>
  </React.StrictMode>,
);
