// interface IProps {}

import "./index.scss";
import { useState } from "react";

const Button = () => {
  const [text1, setText1] = useState("click to me");

  const handleClick = () => {
    setText1((prevText) =>
      prevText === "click to me" ? "clicked" : "click to me"
    );
  };
  return (
    <div className="parg">
      <h2>Exo1/Q1/Q2</h2>
      <div className="textP">{text1}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Button;
