import React from "react";

// Child Component

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      <h2>Counter Value: {value}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
