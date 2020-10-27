import React from "react";
import "./App.scss";
import { Router } from "@reach/router";
import MainPage from "./Pages/MainPage/MainPage";
import NavBar from "./Components/NaVBar/NavBar";
import SingleMovie from "./Pages/SingleMovie/SingleMovie";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <MainPage path="/" />
        <SingleMovie path="movie/:movieId" />
      </Router>
    </div>
  );
}

export default App;
