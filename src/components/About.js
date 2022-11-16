import React from "react";
import MyComponent from "./basic/MyComponent";

const divStyle = {
  margin: "0 auto",
  marginTop: "4rem",
  width: "512px",
};

const About = () => {
  return (
    <div style={divStyle}>
      <MyComponentFunc age={20}>
        <p>하위 엘리먼트</p>
      </MyComponentFunc>
    </div>
  );
};
export default About;
