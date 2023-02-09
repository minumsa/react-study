import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Effect from "./Effect";
import Effect2 from "./Effect2";
import State from "./State";
import State2 from "./State2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/state" element={<State />}></Route>
          <Route path="/state2" element={<State2 />}></Route>
          <Route path="/effect" element={<Effect />}></Route>
          <Route path="/effect2" element={<Effect2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
