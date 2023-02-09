import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Effect() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = e => {
    setName(e.target.value);
  };

  // 처음 마운팅될 때만 실행됨
  useEffect(() => {
    console.log("마운팅 👔");
  }, []);

  // // 렌더링될 때마다 실행됨
  // useEffect(() => {
  //   console.log("렌더링 🎨");
  // });

  // // 마운트 + count가 변경될 때만 실행됨
  // useEffect(() => {
  //   console.log("💯 count 변화");
  // }, [count]);

  // // 마운트 + name이 변경될 때만 실행됨
  // useEffect(() => {
  //   console.log("⭐️ name 변화");
  // }, [name]);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <br />
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>
      <Link to="/">
        <div style={{ marginTop: "50px" }}>메인 페이지로 이동</div>
      </Link>
    </div>
  );
}

export default Effect;
