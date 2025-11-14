import { useState } from "react";

const CounterExercise3Component = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h2>Counter Component</h2>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default CounterExercise3Component;
