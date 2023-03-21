import "./App.css";
import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header></Header>
      <Nav></Nav>
      <Profile></Profile>
    </div>
  );
};

export default App;