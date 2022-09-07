import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import Home from "./components/home";
import Canceled from "./components/canceled";
import Success from "./components/success";
import Standard from "./components/Standard";
import Regular from "./components/Regular";
import Premium from "./components/Premium";
import Basic from "./components/Basic";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/join" element={<Signup />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/canceled" element={<Canceled />} />
        <Route exact path="/premium" element={<Premium />} />
        <Route exact path="/regular" element={<Regular />} />
        <Route exact path="/standard" element={<Standard />} />
        <Route exact path="/basic" element={<Basic />} />
      </Routes>
    </Router>
  );
};

export default App;
