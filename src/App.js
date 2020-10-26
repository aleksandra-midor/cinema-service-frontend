import React from "react";
import "./App.scss";
import { Router } from "@reach/router";
import MainPage from "./Pages/MainPage/MainPage";
import NavBar from './Components/NaVBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <MainPage path="/" />
      </Router>
    </div>
  );
}

export default App;
