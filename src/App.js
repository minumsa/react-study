import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Link to="/useState">useState로 이동</Link>
      <br />
      <Link to="/useEffect">useEffect로 이동</Link>
      <br /> */}
    </div>
  );
}

export default App;
