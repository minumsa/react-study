import { useState } from "react";
import { Link } from "react-router-dom";

function State() {
  const [time, setTime] = useState(1);

  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  return (
    <div>
      <span>현재 시각: {time}시</span>
      <button onClick={handleClick}>Update</button>
      <Link to="/">
        <div style={{ marginTop: "50px" }}>메인 페이지로 이동</div>
      </Link>
    </div>
  );
}

export default State;
