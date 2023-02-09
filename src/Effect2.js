import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Timer from "./component/Timer";

function Effect2() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
      <Link to="/">
        <div style={{ marginTop: "50px" }}>메인 페이지로 이동</div>
      </Link>
    </div>
  );
}

export default Effect2;
