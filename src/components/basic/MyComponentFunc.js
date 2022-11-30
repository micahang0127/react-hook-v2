import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./MyComponent.css";

const MyComponentFunc = ({ name, age, children }) => {
  // 상태변수와 Setter함수 선언
  const [value, setValue] = useState(0);
  const [inputs, setInputs] = useState({
    message: "",
    username: "",
  });
  const { message, username } = inputs;
  const [messages, setMessagess] = useState([
    "Angular",
    "React",
    "Vue",
    "Ember",
  ]);
  const message_list = messages.map((msg, idx) => (
    <li key={idx} onDoubleClick={() => handleDoubleClick(idx)}>
      {msg}
    </li>
  ));
  const [valid, setValid] = useState(false);
  const myUsername = useRef(null);

  // Event Handler 함수선언
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  // 더블클릭시 삭제
  const handleDoubleClick = (index) => {
    setMessagess(messages.filter((val, idx) => idx !== index));
  };
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      setValid(true);
      setMessagess([...messages, message]);
      setInputs({ ...inputs, message: "" });

      myUsername.current.focus();
    }
  };

  return (
    <div>
      함수형 컴포넌트
      <h3>
        {name} / {age}
      </h3>
      {children}
      <h3>Value = {value} </h3>
      <button onClick={() => setValue(value + 1)}>증가</button>
      <button onClick={() => setValue(value - 1)}>감소</button> <br />
      <h3>Message = {message}</h3>
      <input
        type="text"
        name="message"
        value={message}
        onChange={handleChange}
        //onKeyPress={handleEnter}
        onKeyDown={handleEnter}
      />
      <br />
      <ul>{message_list}</ul>
      <h3>Username = {username}</h3>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        className={valid ? "success" : "failure"}
        ref={myUsername}
      />
    </div>
  );
};

MyComponentFunc.defaultProps = {
  name: "리액트JS",
};
// props의 type을 주면 warning을 막을수 있다.
// 빌드 시, warning은 지우고 빌드해야 한다.
MyComponentFunc.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};
export default MyComponentFunc;
