import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <span style={{ backgroundColor: "black", color: "#61DBFB", fontSize: "50px", fontWeight: "bold", textDecoration: "underline overline #61DBFB" }}>
        Hello, React!
      </span>
      <ul>
        <Link to="/state">
          <li>useState 1로 이동 - 시간 업데이트</li>
        </Link>
        <Link to="/state2">
          <li>useState 2로 이동 - 이름 업데이트</li>
        </Link>
        <Link to="/effect">
          <li>useEffect 1로 이동 - 숫자, 이름 업데이트</li>
        </Link>
        <Link to="/effect2">
          <li>useEffect 2로 이동 - 타이머</li>
        </Link>
      </ul>
    </div>
  );
}

export default Main;
