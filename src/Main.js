import React from "react";
import { Link } from "react-router-dom";

function main() {
  return (
    <div>
      <p>Hello, React!</p>
      <ul>
        <Link to="/UseState">
          <li>useState로 이동</li>
        </Link>
        <Link to="/UseEffect">
          <li>useEffect로 이동</li>
        </Link>
      </ul>
    </div>
  );
}

export default main;
