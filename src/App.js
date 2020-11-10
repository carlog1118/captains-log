import React from "react";
//import { Route, Swith } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import LogInForm from "./Components/LogInForm/LogInForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <NavBar />
        <LogInForm />
        <h1>footer</h1>
      </div>
    </div>
  );
}

export default App;
