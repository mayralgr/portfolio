import "./App.css";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// Components
import NavBar from "./components/shared/NavBar";
import { Routes } from "./router/Routes";

function App() {
  const abbreviation = "MLGR";
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <NavBar {...{ abbreviation }} />
        <Routes />
      </HashRouter>
    </div>
  );
}

export default App;
