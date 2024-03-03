import React, { useState } from "react";
import Counter from "./Counter";

// Parent Component

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="w-5/6 my-5 text-center mx-auto">
      <h1 className="text-2xl font-semibold text-white bg-slate-800 p-5">
        Counter App
      </h1>
      <Counter
        value={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
};

export default App;
