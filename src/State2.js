import { useState } from "react";
import { Link } from "react-router-dom";

// 초기 값을 가져올 때 어떤 무거운 작업을 해야 된다면, 바로 안에 값을 넣지 않고 콜백 함수를 쓴다. 그렇게 하면 맨 처음 화면에 렌더링될 때만 그 함수가 불려진다.
const heavyWork = () => {
  console.log("엄청 무거운 작업!!!");
  return ["홍상수", "김민희"];
};

function State2() {
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState("");

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames(prevState => {
      console.log("이전 state: ", prevState);
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((names, idx) => {
        return <p key={idx}>{names}</p>;
      })}
      <Link to="/">
        <div style={{ marginTop: "50px" }}>메인 페이지로 이동</div>
      </Link>
    </div>
  );
}

export default State2;
