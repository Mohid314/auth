import React from "react";
import "./App.css";
import Register from "./Register";
import Login from "./Login";
import {BrowserRouter as Router, Routes , Route } from "react-router-dom";
import CharactersList from "./Feed";
import Imageupload from "./imageupload";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/image" element={<Imageupload/>}/>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/feed" element={<CharactersList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
