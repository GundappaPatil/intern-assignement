import React, { useState } from "react";
import "./basic.css";

const Basic = (props) => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="container">
      <button
        style={{ backgroundColor: toggle ? "red" : "blue" }}
        onClick={props.incrementCounter}
        className="button-1"
      >
        <h1>{props.counter}</h1>
        <span>Click to increase counter</span>
      </button>

      <button onClick={handleClick} className="button-2">
        Change Color
      </button>
    </div>
  );
};

export default Basic;
