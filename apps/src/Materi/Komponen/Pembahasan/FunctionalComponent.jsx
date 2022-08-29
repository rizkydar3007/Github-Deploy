import { useState } from "react";

const FunctionalComponent = ({ nama }) => {
  const [value, setValue] = useState(0);

  const handlePlus = () => {
    setValue(value + 1);
  };

  const handleMinus = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <h1>Functional Component</h1>
      <h2>Have a great day {nama}</h2>
      <button onClick={handleMinus}>-</button>
      <span> {value} </span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

export default FunctionalComponent;
