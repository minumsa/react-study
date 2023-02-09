import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Effect from "./Effect";
import State from "./State";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/state" element={<State />}></Route>
          <Route path="/effect" element={<Effect />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
