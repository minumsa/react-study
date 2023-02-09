import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <p>Hello, React!</p>
      <ul>
        <Link to="/state">
          <li>useState로 이동</li>
        </Link>
        <Link to="/state2">
          <li>useState 2로 이동</li>
        </Link>
        <Link to="/effect">
          <li>useEffect로 이동</li>
        </Link>
      </ul>
    </div>
  );
}

export default Main;
