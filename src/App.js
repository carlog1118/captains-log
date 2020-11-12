import React from "react";
//import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import LogInForm from "./Components/LogInForm/LogInForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <NavBar />
        <LogInForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
