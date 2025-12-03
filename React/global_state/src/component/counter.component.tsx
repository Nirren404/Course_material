import { useContext } from "react";
import CounterContext from "../context/counter.context";

const CounterComponent = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <p>Count: {state.count}</p>
      <hr />
      <button onClick={() => dispatch({ type: "increment" })}>Plus</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Minus</button>
    </div>
  );
};

export default CounterComponent;
