import React, { useState } from "react";
import Basic from "./Basic";

function Counter() {
  const [counter, setCounter] = useState(2);

  const incrementCounter = () => {
    setCounter(counter + 10);
  };
  return (
    <div>
      <Basic
        counter={counter < 10 ? "0" + counter : counter}
        incrementCounter={incrementCounter}
      />
    </div>
  );
}
// var cendol = 2;

export default Counter;
