import React from "react";

// Child Component

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className="my-10">
      <h2 className="text-4xl">Counter Value: {value}</h2>
      <div className="my-4 space-x-5">
        <button
          className="bg-red-500 px-5 py-2 text-lg my-5 rounded font-semibold"
          onClick={onDecrement}
        >
          Decrement
        </button>
        <button
          className="bg-green-500 px-5 py-2 text-lg my-5 rounded font-semibold"
          onClick={onIncrement}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
